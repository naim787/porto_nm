import chokidar from 'chokidar';
import simpleGit from 'simple-git';

const git = simpleGit();

// Fungsi untuk mendapatkan pesan commit saat ini
function getTimestampMessage() {
    const now = new Date();
    return `Update: ${now.toLocaleString()}`;
}

// Cek apakah ada commit yang belum di-push
async function pushPendingCommits() {
    try {
        const status = await git.status();
        const log = await git.log(['@{u}..']); // Commit yang belum di-push

        if (log.total > 0) {
            console.log(`🔄 Ditemukan ${log.total} commit yang belum di-push. Melanjutkan push...`);
            await git.push();
            console.log('✅ Push berhasil.');
        } else {
            console.log('🟢 Tidak ada commit yang tertunda.');
        }
    } catch (error) {
        console.error('❌ Gagal memeriksa commit tertunda:', error.message);
    }
}

// Commit dan push jika ada perubahan
async function commitAndPush() {
    try {
        const status = await git.status();
        if (status.files.length === 0) {
            console.log('🟢 Tidak ada perubahan. Tidak commit.');
            return;
        }

        console.log('📦 Melakukan add, commit, dan push...');
        await git.add('.');
        await git.commit(getTimestampMessage()); // format waktu
        await git.push();
        console.log('✅ Sukses commit dan push!');
    } catch (error) {
        console.error('❌ Error saat git commit/push:', error.message);
    }
}

// Watcher
chokidar.watch('.', {
    ignored: /(^|[\/\\])\..|node_modules/,
    persistent: true
}).on('change', (path) => {
    console.log(`📁 Perubahan terdeteksi: ${path}`);
    commitAndPush();
});

// Saat aplikasi dijalankan
(async () => {
    console.log('🚀 Menjalankan auto-commit...');
    await pushPendingCommits();
})();
