document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('diet-form');
    const viewResultButton = document.getElementById('view-result');

    if (viewResultButton) {
        viewResultButton.addEventListener('click', () => {
            const diet = document.querySelector('input[name="diet"]:checked');
            const plan = document.querySelector('input[name="plan"]:checked');

            if (diet && plan) {
                const dietValue = diet.value;
                const planValue = plan.value;
                const url = `result.html?diet=${encodeURIComponent(dietValue)}&plan=${encodeURIComponent(planValue)}`;
                window.location.href = url;
            } else {
                alert('Por favor, selecione uma dieta e um plano.');
            }
        });
    }

    const params = new URLSearchParams(window.location.search);
    const diet = params.get('diet');
    const plan = params.get('plan');

    if (diet && plan) {
        const shoppingListContainer = document.getElementById('shopping-list');
        const recipesListContainer = document.getElementById('recipes-list');

        if (shoppingListContainer) {
            shoppingListContainer.innerHTML = generateShoppingList(diet, plan);
        }

        if (recipesListContainer) {
            recipesListContainer.innerHTML = generateRecipes(diet);
        }

        const backButton = document.getElementById('back-button');
        if (backButton) {
            backButton.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }
    } else if (document.body.contains(document.getElementById('diet-form'))) {
        // No parameters in index.html, do nothing
    } else {
        const container = document.querySelector('.container');
        if (container) {
            container.innerHTML = '<h1>Parâmetros não encontrados!</h1>';
        }
    }

 
    function generateShoppingList(diet, plan) {
        const items = {
            vegetariana: {
                diario: [
                    { item: 'Pão integral', quantidade: '4 fatias' },
                    { item: 'Frutas', quantidade: '300 g' },
                    { item: 'Leite de soja', quantidade: '200 ml' },
                    { item: 'Tomates', quantidade: '200 g' },
                    { item: 'Alface', quantidade: '1 maço' },
                    { item: 'Cenouras', quantidade: '200 g' },
                    { item: 'Feijão', quantidade: '150 g' },
                    { item: 'Pepinos', quantidade: '100 g' },
                    { item: 'Berinjelas', quantidade: '1 unidade' },
                    { item: 'Queijo', quantidade: '100 g' }
                ],
                mensal: [
                    { item: 'Pão integral', quantidade: '120 fatias' },
                    { item: 'Frutas', quantidade: '9 kg' },
                    { item: 'Leite de soja', quantidade: '6 litros' },
                    { item: 'Tomates', quantidade: '6 kg' },
                    { item: 'Alface', quantidade: '30 maços' },
                    { item: 'Cenouras', quantidade: '6 kg' },
                    { item: 'Feijão', quantidade: '4.5 kg' },
                    { item: 'Pepinos', quantidade: '3 kg' },
                    { item: 'Berinjelas', quantidade: '30 unidades' },
                    { item: 'Queijo', quantidade: '3 kg' }
                ]
            },
            vegana: {
                diario: [
                    { item: 'Pão integral', quantidade: '4 fatias' },
                    { item: 'Frutas', quantidade: '300 g' },
                    { item: 'Leite de amêndoas', quantidade: '200 ml' },
                    { item: 'Abóbora', quantidade: '200 g' },
                    { item: 'Espinafre', quantidade: '1 maço' },
                    { item: 'Batata Doce', quantidade: '200 g' },
                    { item: 'Lentilhas', quantidade: '150 g' },
                    { item: 'Cogumelos', quantidade: '100 g' },
                    { item: 'Pimentões', quantidade: '1 unidade' },
                    { item: 'Nozes', quantidade: '30 g' }
                ],
                mensal: [
                    { item: 'Pão integral', quantidade: '120 fatias' },
                    { item: 'Frutas', quantidade: '9 kg' },
                    { item: 'Leite de amêndoas', quantidade: '6 litros' },
                    { item: 'Abóbora', quantidade: '6 kg' },
                    { item: 'Espinafre', quantidade: '30 maços' },
                    { item: 'Batata Doce', quantidade: '6 kg' },
                    { item: 'Lentilhas', quantidade: '4.5 kg' },
                    { item: 'Cogumelos', quantidade: '3 kg' },
                    { item: 'Pimentões', quantidade: '30 unidades' },
                    { item: 'Nozes', quantidade: '900 g' }
                ]
            },
            'low-carb': {
                diario: [
                    { item: 'Ovos', quantidade: '3 unidades' },
                    { item: 'Abacate', quantidade: '1 unidade' },
                    { item: 'Frango', quantidade: '200 g' },
                    { item: 'Abobrinha', quantidade: '150 g' },
                    { item: 'Queijo', quantidade: '50 g' },
                    { item: 'Amêndoas', quantidade: '30 g' },
                    { item: 'Brócolis', quantidade: '200 g' },
                    { item: 'Espinafre', quantidade: '1 maço' },
                    { item: 'Peito de Peru', quantidade: '100 g' }
                ],
                mensal: [
                    { item: 'Ovos', quantidade: '90 unidades' },
                    { item: 'Abacate', quantidade: '30 unidades' },
                    { item: 'Frango', quantidade: '6 kg' },
                    { item: 'Abobrinha', quantidade: '4.5 kg' },
                    { item: 'Queijo', quantidade: '1.5 kg' },
                    { item: 'Amêndoas', quantidade: '900 g' },
                    { item: 'Brócolis', quantidade: '6 kg' },
                    { item: 'Espinafre', quantidade: '30 maços' },
                    { item: 'Peito de Peru', quantidade: '3 kg' }
                ]
            },
            keto: {
                diario: [
                    { item: 'Ovos', quantidade: '3 unidades' },
                    { item: 'Abacate', quantidade: '1 unidade' },
                    { item: 'Salmão', quantidade: '200 g' },
                    { item: 'Espinafre', quantidade: '1 maço' },
                    { item: 'Queijo', quantidade: '50 g' },
                    { item: 'Nozes', quantidade: '30 g' },
                    { item: 'Cogumelos', quantidade: '100 g' },
                    { item: 'Brócolis', quantidade: '200 g' },
                    { item: 'Azeite de oliva', quantidade: '20 ml' }
                ],
                mensal: [
                    { item: 'Ovos', quantidade: '90 unidades' },
                    { item: 'Abacate', quantidade: '30 unidades' },
                    { item: 'Salmão', quantidade: '6 kg' },
                    { item: 'Espinafre', quantidade: '30 maços' },
                    { item: 'Queijo', quantidade: '1.5 kg' },
                    { item: 'Nozes', quantidade: '900 g' },
                    { item: 'Cogumelos', quantidade: '3 kg' },
                    { item: 'Brócolis', quantidade: '6 kg' },
                    { item: 'Azeite de oliva', quantidade: '600 ml' }
                ]
            },
            onivora: {
                diario: [
                    { item: 'Ovos', quantidade: '2 unidades' },
                    { item: 'Frutas', quantidade: '200 g' },
                    { item: 'Carne Moída', quantidade: '200 g' },
                    { item: 'Arroz', quantidade: '150 g' },
                    { item: 'Batatas', quantidade: '200 g' },
                    { item: 'Cebolas', quantidade: '1 unidade' },
                    { item: 'Alho', quantidade: '1 dente' },
                    { item: 'Brócolis', quantidade: '200 g' },
                    { item: 'Peito de Frango', quantidade: '200 g' }
                ],
                mensal: [
                    { item: 'Ovos', quantidade: '60 unidades' },
                    { item: 'Frutas', quantidade: '6 kg' },
                    { item: 'Carne Moída', quantidade: '6 kg' },
                    { item: 'Arroz', quantidade: '4.5 kg' },
                    { item: 'Batatas', quantidade: '6 kg' },
                    { item: 'Cebolas', quantidade: '30 unidades' },
                    { item: 'Alho', quantidade: '30 dentes' },
                    { item: 'Brócolis', quantidade: '6 kg' },
                    { item: 'Peito de Frango', quantidade: '6 kg' }
                ]
            }
        };

        const list = items[diet] && items[diet][plan] || [];
        let html = '<h2>Lista de Compras</h2><ul>';
        list.forEach(item => {
            html += `<li>${item.item}: ${item.quantidade}</li>`;
        });
        html += '</ul>';
        return html;
    }

    function generateRecipes(diet) {
        const recipes = {
            vegetariana: {
                'Café da Manhã': [
                    "Pão integral com queijo e tomates",
                    "Smoothie de frutas com aveia",
                    "Torradas com abacate e suco de laranja"
                ],
                'Almoço': [
                    "Salada de alface, cenoura, pepino e tomate com feijão",
                    "Berinjela grelhada com arroz integral e feijão",
                    "Sopa de legumes com pão integral"
                ],
                Jantar: [
                    "Sanduíche de queijo e vegetais grelhados",
                    "Pizza vegetariana com salada",
                    "Risoto de cogumelos com espinafre"
                ]
            },
            vegana: {
                'Café da Manhã': [
                    "Pão integral com pasta de amendoim e frutas",
                    "Smoothie verde com espinafre, banana e leite de amêndoas",
                    "Aveia com frutas e nozes"
                ],
                'Almoço': [
                    "Salada de abóbora assada, espinafre e lentilhas",
                    "Batata doce assada com legumes e arroz integral",
                    "Wrap de vegetais grelhados com hummus"
                ],
                Jantar: [
                    "Sopa de lentilhas com pão integral",
                    "Stir-fry de tofu com brócolis e pimentão",
                    "Macarrão de abobrinha com molho de tomate"
                ]
            },
            'low-carb': {
                'Café da Manhã': [
                    "Omelete de espinafre e queijo",
                    "Iogurte grego com amêndoas e frutas vermelhas",
                    "Abacate recheado com ovos e queijo"
                ],
                'Almoço': [
                    "Frango grelhado com abobrinha e salada de espinafre",
                    "Salada de peito de peru com abacate e nozes",
                    "Salmão grelhado com brócolis e cogumelos"
                ],
                Jantar: [
                    "Carne moída com pimentões recheados",
                    "Hambúrguer de frango sem pão com salada",
                    "Couve-flor gratinada com queijo e frango"
                ]
            },
            keto: {
                'Café da Manhã': [
                    "Ovos mexidos com abacate e espinafre",
                    "Panquecas de farinha de amêndoa com nozes e manteiga",
                    "Iogurte de coco com nozes e frutas vermelhas"
                ],
                'Almoço': [
                    "Salmão grelhado com espinafre e abacate",
                    "Salada de frango com queijo, nozes e azeite de oliva",
                    "Hambúrguer de carne com queijo e salada"
                ],
                Jantar: [
                    "Peito de frango com brócolis e cogumelos",
                    "Bife grelhado com salada de espinafre",
                    "Camarão ao alho com legumes salteados"
                ]
            },
            onivora: {
                'Café da Manhã': [
                    "Ovos mexidos com tomate e pão integral",
                    "Iogurte com frutas e granola",
                    "Panquecas de aveia com frutas"
                ],
                'Almoço': [
                    "Carne moída com arroz, feijão e salada",
                    "Peito de frango grelhado com batatas e brócolis",
                    "Lasanha de carne com salada verde"
                ],
                Jantar: [
                    "Sopa de legumes com pão integral",
                    "Peixe assado com batatas e legumes",
                    "Estrogonofe de frango com arroz e salada"
                ]
            }
        };

        const recipesList = recipes[diet];
        let html = '<h2>Receitas</h2>';
        for (const meal in recipesList) {
            if (recipesList.hasOwnProperty(meal)) {
                html += `<h3>${meal.charAt(0).toUpperCase() + meal.slice(1)}</h3><ul>`;
                recipesList[meal].forEach(recipe => {
                    html += `<li>${recipe}</li>`;
                });
                html += '</ul>';
            }
        }
        return html;
    }
});
