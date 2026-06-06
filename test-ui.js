const puppeteer = require('puppeteer');

(async () => {
  console.log("Iniciando testes E2E do UI...");
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    console.log("Navegando para a página inicial...");
    await page.goto('http://localhost:3000');
    
    console.log("Testando o botão de Tema no Header...");
    const themeBtn = await page.waitForSelector('button[aria-label="Alternar tema claro/escuro"]');
    await themeBtn.click();
    console.log("✅ Botão de tema clicado com sucesso.");
    
    console.log("Testando o menu de Acessibilidade...");
    const accBtn = await page.waitForSelector('button[aria-label="Menu de acessibilidade"]');
    await accBtn.click();
    
    const restoreBtn = await page.waitForSelector('button[aria-label="Restaurar configurações padrão"]', { visible: true });
    console.log("✅ Pop-up do menu de acessibilidade abriu com sucesso.");
    
    console.log("Navegando para a página do livro (Sabor Amargo)...");
    await page.goto('http://localhost:3000/livro/1'); // Sabor Amargo is ID 1 (based on context)
    
    // Fallback to whatever first image there is if 'Sabor Amargo - Imagem 1' doesn't exactly match
    await page.waitForSelector('img[alt*="Imagem 1"]', { timeout: 5000 });
    console.log("✅ Imagem 1 carregada.");
    
    console.log("Clicando no botão de Próxima Imagem do carrossel...");
    const nextBtn = await page.waitForSelector('button[aria-label="Próxima imagem"]');
    await nextBtn.click();
    
    // Verify it switched to Image 2
    await page.waitForSelector('img[alt*="Imagem 2"]', { timeout: 5000 });
    console.log("✅ Imagem 2 apareceu após o clique. Carrossel funcionando perfeitamente.");
    
    await browser.close();
    console.log("🎉 Todos os testes passaram!");
  } catch (error) {
    console.error("❌ Falha no teste:", error);
    process.exit(1);
  }
})();
