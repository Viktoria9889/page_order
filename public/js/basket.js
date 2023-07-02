document.addEventListener('click', (ev) => {
    const id = ev.target?.dataset?.id || null;//<button data-id="<%= newOrder.id %>">delate</button> якщо по кнопці якій ми клікнули є data-id тоді ми видаляєм рядок
    if (id) {
        fetch(`/basket/${id}`, {
            method: 'DELETE',
        }).then(() => {
            window.location.href = '/basket';
        })
    }
})
