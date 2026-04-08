export interface MenuItem {
  name: string
  price: number
  description?: string
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'classicos',
    label: 'Clássicos',
    items: [
      { name: 'Negroni', price: 9, description: 'Gin, Campari, vermute tinto' },
      { name: 'Old Fashioned', price: 10, description: 'Bourbon, açúcar, Angostura bitters' },
      { name: 'Manhattan', price: 10, description: 'Rye whiskey, vermute tinto, bitters' },
      { name: 'Margarita', price: 9, description: 'Tequila, triple sec, sumo de lima' },
      { name: 'Whisky Sour', price: 9, description: 'Bourbon, sumo de limão, xarope de açúcar' },
      { name: 'Daiquiri', price: 9, description: 'Rum branco, sumo de lima, açúcar' },
      { name: 'Mojito', price: 8.5, description: 'Rum branco, hortelã, lima, açúcar, soda' },
      { name: 'Espresso Martini', price: 10, description: 'Vodka, licor de café, café expresso' },
    ],
  },
  {
    id: 'autorais',
    label: 'Autorais',
    items: [
      { name: 'Alavarium Signature', price: 12, description: 'A receita secreta da casa' },
      { name: 'Aveiro Sunset', price: 11, description: 'Gin, Aperol, sumo de maracujá, prosecco' },
      { name: 'Ria Fumada', price: 12, description: 'Mezcal, lima, agave, sal fumado' },
      { name: 'Costa Nova', price: 11, description: 'Vodka, flor de sabugueiro, pepino, tónica' },
      { name: 'Bairro Antigo', price: 11, description: 'Rum envelhecido, bitters de chocolate, laranja' },
      { name: 'Sal & Mar', price: 12, description: 'Gin, algas, limão, água tónica premium' },
    ],
  },
  {
    id: 'sem-alcool',
    label: 'Sem Álcool',
    items: [
      { name: 'Virgin Mojito', price: 7, description: 'Hortelã, lima, açúcar, soda' },
      { name: 'Passion Fizz', price: 7, description: 'Maracujá, lima, xarope, soda' },
      { name: 'Garden Tonic', price: 7.5, description: 'Pepino, hortelã, tónica, lima' },
      { name: 'Berry Smash', price: 7, description: 'Frutos vermelhos, limão, xarope de baunilha' },
    ],
  },
  {
    id: 'vinhos',
    label: 'Vinhos',
    items: [
      { name: 'Vinho branco da casa (copo)', price: 4.5 },
      { name: 'Vinho tinto da casa (copo)', price: 4.5 },
      { name: 'Vinho verde (copo)', price: 5 },
      { name: 'Prosecco (copo)', price: 6 },
      { name: 'Champagne (copo)', price: 12 },
    ],
  },
  {
    id: 'spirits',
    label: 'Spirits',
    items: [
      { name: 'Gin nacional (dose)', price: 6 },
      { name: 'Vodka premium (dose)', price: 7 },
      { name: 'Whisky single malt (dose)', price: 9 },
      { name: 'Rum envelhecido (dose)', price: 8 },
      { name: 'Tequila reposado (dose)', price: 8 },
      { name: 'Mezcal artesanal (dose)', price: 10 },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    items: [
      { name: 'Água mineral', price: 2 },
      { name: 'Água com gás', price: 2.5 },
      { name: 'Sumo de laranja natural', price: 4 },
      { name: 'Coca-Cola / Zero', price: 3 },
      { name: 'Água tónica', price: 3 },
      { name: 'Cerveja artesanal', price: 4.5 },
      { name: 'Café', price: 1.2 },
    ],
  },
]
