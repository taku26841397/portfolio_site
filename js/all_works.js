const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".project-item");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        // active クラス切り替え
        buttons.forEach(b => b.classList.remove("now"));
        btn.classList.add("now");

        // 作品フィルタリング
        items.forEach(item => {
            if (filter === "all" || item.dataset.category === filter) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
    });
});
