// const chokidar = require('chokidar');
// const simpleGit = require('simple-git');
import chokidar from "chokidar";
import simpleGit from "simple-git";
const git = simpleGit();

const CHECK_INTERVAL = 60 * 1000; // 1 menit
let lastChangedTime = null;
let intervalChecker = null;

function getTimestampMessage() {
    const now = new Date();
    return `Auto Commit: ${now.toLocaleString()}`;
}

// Cek apakah ada commit lokal yang belum di-push
async function hasUnpushedCommits() {
    const log = await git.log(['@{u}..']);
    return log.total > 0;
}

// Cek apakah ada perubahan yang belum di-commit
async function hasUncommittedChanges() {
    const status = await git.status();
    return status.files.length > 0;
}

// Commit dan push perubahan
async function commitAndPush() {
    try {
        const hasChanges = await hasUncommittedChanges();
        if (!hasChanges) {
            console.log('🟢 Tidak ada perubahan yang perlu di-commit.');
            return;
        }

        await git.add('.');
        await git.commit(getTimestampMessage());
        await git.push();
        console.log('✅ Perubahan berhasil di-commit dan di-push.');
    } catch (error) {
        console.error('❌ Gagal saat commit/push:', error.message);
    }
}

// Jalankan proses jika perlu
async function runIfNeeded() {
    const now = Date.now();

    // Cek apakah ada commit lokal yang belum di-push
    const unpushed = await hasUnpushedCommits();
    if (unpushed) {
        console.log('🔄 Commit belum di-push ditemukan. Mem-push...');
        await git.push();
        return;
    }

    // Cek apakah sudah 1 menit sejak perubahan terakhir
    if (lastChangedTime && now - lastChangedTime >= CHECK_INTERVAL) {
        console.log('⏱ 1 menit berlalu sejak perubahan terakhir. Memproses...');
        await commitAndPush();
        lastChangedTime = null;
    }
}

// Watcher: pantau perubahan file
chokidar.watch('.', {
    ignored: /(^|[\/\\])\..|node_modules/,
    persistent: true
}).on('change', (path) => {
    console.log(`📁 Perubahan terdeteksi: ${path}`);
    lastChangedTime = Date.now();
});

// Saat script dijalankan
(async () => {
    console.log('🚀 Auto Git Watcher dimulai...');

    // Cek & push commit lama (jika ada)
    if (await hasUnpushedCommits()) {
        await git.push();
    }

    // Set interval untuk memeriksa status tiap 10 detik
    intervalChecker = setInterval(runIfNeeded, 10 * 1000);
})();
