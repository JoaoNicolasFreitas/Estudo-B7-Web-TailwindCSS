function toggleForm() {
    const title = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const toggleText = document.getElementById("toggle-text");
    const isLogin = title.innerText === "Sistema de Login";

    title.innerText = isLogin ? "Sistema de Cadastro" : "Sistema de Login";
    submitBtn.innerText = isLogin ? "Cadastrar" : "Entrar";
    toggleText.innerHTML = isLogin ? 'Já tem uma conta? <a href="#" class="text-yellow-500 hover:underline" onclick="toggleForm()">Faça login</a>' : 'Não é membro? <a href="#" class="text-yellow-500 hover:underline" onclick="toggleForm()">Faça seu cadastro agora</a>';
}