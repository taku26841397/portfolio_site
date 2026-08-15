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

function filterProjects(filter) {
    document.querySelectorAll('.project-item').forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}


document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // URLだけ書き換える（リロードなし）
        history.replaceState(null, "", `?category=${filter}`);

        // 絞り込み実行
        filterProjects(filter);

        // タイトル変更
        updateTitle(filter);

        // ボタンの now を付け替え
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('now'));
        btn.classList.add('now');
    });
});


// document.addEventListener("DOMContentLoaded", () => {
//     const params = new URLSearchParams(window.location.search);
//     const category = params.get("category");

//     if (category) {
//         filterProjects(category);

//         document.querySelectorAll('.filter-btn').forEach(btn => {
//             btn.classList.remove('now');
//             if (btn.dataset.filter === category) {
//                 btn.classList.add('now');
//             }
//         });
//     }
// });



function updateTitle(category) {
    const titleElement = document.querySelector('.title h2');

    if (category === 'all') {
        titleElement.textContent = 'ALL WORKS';
    } else if (category === 'django') {
        titleElement.textContent = 'Django';
    } else if (category === 'react') {
        titleElement.textContent = 'React';
    } else if (category === 'web') {
        titleElement.textContent = 'WEB';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (category) {
        filterProjects(category);
        updateTitle(category);

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('now');
            if (btn.dataset.filter === category) {
                btn.classList.add('now');
            }
        });
    }
});







