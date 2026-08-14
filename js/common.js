const loader = document.getElementById("loader");

// ページ読み込み時にロード画面を表示 → 少し遅れて消す
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("hide");
    }, 800); // 0.8秒後にフェードアウト
});