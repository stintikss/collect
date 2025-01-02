function createHeader() {
    const headerHTML = `
        <div class="header">
            <div class="main_header">
                <div class="img">
                    <img src="img/Group 1 (15).png" alt="">
                    <p class="image-text">Collect</p>
                </div>
                <div class="text">
                    <a class="main" href="/collect/main.html">MAIN</a>
                    <a class="about" href="/collect/index.html">ABOUT</a>
                    <a class="library" href="#">LIBRARY</a>
                    <a class="merch" href="#">MERCH</a>
                </div>
                <div class="search">
                    <input class="search_input" type="text" placeholder="search">
                </div>
                <div class="button_log_reg">
                    <div class="login_but">Login</div>
                    <div class="register_button">Register</div>
                </div>           
            </div>
        </div>
    `;

    // Добавляем HTML в начало body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Вызов функции при загрузке страницы
document.addEventListener("DOMContentLoaded", createHeader);
