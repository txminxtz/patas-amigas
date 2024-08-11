document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const loginMessage = document.getElementById('loginMessage');
    const signupMessage = document.getElementById('signupMessage');

    switchToSignup.addEventListener('click', () => {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    switchToLogin.addEventListener('click', () => {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Simulação de processamento de formulário (substitua por lógica de backend)
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Adicione lógica de login aqui
        loginMessage.textContent = "Login realizado com sucesso!";
    });

    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Adicione lógica de cadastro aqui
        signupMessage.textContent = "Cadastro realizado com sucesso!";
    });
});
