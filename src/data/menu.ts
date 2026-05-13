import type { Lang } from '../i18n/translations'

export interface MenuItem {
  name: { pt: string; en: string }
  price: number
  description?: { pt: string; en: string }
}

export interface MenuCategory {
  id: string
  label: { pt: string; en: string }
  items: MenuItem[]
}

export function tr<T>(field: { pt: T; en: T }, lang: Lang): T {
  return field[lang]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'classicos',
    label: { pt: 'Clássicos', en: 'Classics' },
    items: [
      {
        name: { pt: 'Negroni', en: 'Negroni' },
        price: 9,
        description: { pt: 'Gin, Campari, vermute tinto', en: 'Gin, Campari, sweet vermouth' },
      },
      {
        name: { pt: 'Old Fashioned', en: 'Old Fashioned' },
        price: 10,
        description: { pt: 'Bourbon, açúcar, Angostura bitters', en: 'Bourbon, sugar, Angostura bitters' },
      },
      {
        name: { pt: 'Manhattan', en: 'Manhattan' },
        price: 10,
        description: { pt: 'Rye whiskey, vermute tinto, bitters', en: 'Rye whiskey, sweet vermouth, bitters' },
      },
      {
        name: { pt: 'Margarita', en: 'Margarita' },
        price: 9,
        description: { pt: 'Tequila, triple sec, sumo de lima', en: 'Tequila, triple sec, lime juice' },
      },
      {
        name: { pt: 'Whisky Sour', en: 'Whiskey Sour' },
        price: 9,
        description: { pt: 'Bourbon, sumo de limão, xarope de açúcar', en: 'Bourbon, lemon juice, sugar syrup' },
      },
      {
        name: { pt: 'Daiquiri', en: 'Daiquiri' },
        price: 9,
        description: { pt: 'Rum branco, sumo de lima, açúcar', en: 'White rum, lime juice, sugar' },
      },
      {
        name: { pt: 'Mojito', en: 'Mojito' },
        price: 8.5,
        description: { pt: 'Rum branco, hortelã, lima, açúcar, soda', en: 'White rum, mint, lime, sugar, soda' },
      },
      {
        name: { pt: 'Espresso Martini', en: 'Espresso Martini' },
        price: 10,
        description: { pt: 'Vodka, licor de café, café expresso', en: 'Vodka, coffee liqueur, espresso' },
      },
    ],
  },
  {
    id: 'autorais',
    label: { pt: 'Autorais', en: 'Signatures' },
    items: [
      {
        name: { pt: 'Alavarium Signature', en: 'Alavarium Signature' },
        price: 12,
        description: { pt: 'A receita secreta da casa', en: 'Our secret house recipe' },
      },
      {
        name: { pt: 'Aveiro Sunset', en: 'Aveiro Sunset' },
        price: 11,
        description: { pt: 'Gin, Aperol, sumo de maracujá, prosecco', en: 'Gin, Aperol, passion fruit juice, prosecco' },
      },
      {
        name: { pt: 'Ria Fumada', en: 'Smoked Ria' },
        price: 12,
        description: { pt: 'Mezcal, lima, agave, sal fumado', en: 'Mezcal, lime, agave, smoked salt' },
      },
      {
        name: { pt: 'Costa Nova', en: 'Costa Nova' },
        price: 11,
        description: { pt: 'Vodka, flor de sabugueiro, pepino, tónica', en: 'Vodka, elderflower, cucumber, tonic' },
      },
      {
        name: { pt: 'Bairro Antigo', en: 'Old Quarter' },
        price: 11,
        description: { pt: 'Rum envelhecido, bitters de chocolate, laranja', en: 'Aged rum, chocolate bitters, orange' },
      },
      {
        name: { pt: 'Sal & Mar', en: 'Salt & Sea' },
        price: 12,
        description: { pt: 'Gin, algas, limão, água tónica premium', en: 'Gin, seaweed, lemon, premium tonic' },
      },
    ],
  },
  {
    id: 'sem-alcool',
    label: { pt: 'Sem Álcool', en: 'Non-Alcoholic' },
    items: [
      {
        name: { pt: 'Virgin Mojito', en: 'Virgin Mojito' },
        price: 7,
        description: { pt: 'Hortelã, lima, açúcar, soda', en: 'Mint, lime, sugar, soda' },
      },
      {
        name: { pt: 'Passion Fizz', en: 'Passion Fizz' },
        price: 7,
        description: { pt: 'Maracujá, lima, xarope, soda', en: 'Passion fruit, lime, syrup, soda' },
      },
      {
        name: { pt: 'Garden Tonic', en: 'Garden Tonic' },
        price: 7.5,
        description: { pt: 'Pepino, hortelã, tónica, lima', en: 'Cucumber, mint, tonic, lime' },
      },
      {
        name: { pt: 'Berry Smash', en: 'Berry Smash' },
        price: 7,
        description: { pt: 'Frutos vermelhos, limão, xarope de baunilha', en: 'Red berries, lemon, vanilla syrup' },
      },
    ],
  },
  {
    id: 'vinhos',
    label: { pt: 'Vinhos', en: 'Wines' },
    items: [
      { name: { pt: 'Vinho branco da casa (copo)', en: 'House white wine (glass)' }, price: 4.5 },
      { name: { pt: 'Vinho tinto da casa (copo)', en: 'House red wine (glass)' }, price: 4.5 },
      { name: { pt: 'Vinho verde (copo)', en: 'Vinho Verde (glass)' }, price: 5 },
      { name: { pt: 'Prosecco (copo)', en: 'Prosecco (glass)' }, price: 6 },
      { name: { pt: 'Champagne (copo)', en: 'Champagne (glass)' }, price: 12 },
    ],
  },
  {
    id: 'spirits',
    label: { pt: 'Spirits', en: 'Spirits' },
    items: [
      { name: { pt: 'Gin nacional (dose)', en: 'Portuguese gin (shot)' }, price: 6 },
      { name: { pt: 'Vodka premium (dose)', en: 'Premium vodka (shot)' }, price: 7 },
      { name: { pt: 'Whisky single malt (dose)', en: 'Single malt whisky (shot)' }, price: 9 },
      { name: { pt: 'Rum envelhecido (dose)', en: 'Aged rum (shot)' }, price: 8 },
      { name: { pt: 'Tequila reposado (dose)', en: 'Tequila Reposado (shot)' }, price: 8 },
      { name: { pt: 'Mezcal artesanal (dose)', en: 'Artisan mezcal (shot)' }, price: 10 },
    ],
  },
  {
    id: 'bebidas',
    label: { pt: 'Bebidas', en: 'Drinks' },
    items: [
      { name: { pt: 'Água mineral', en: 'Still water' }, price: 2 },
      { name: { pt: 'Água com gás', en: 'Sparkling water' }, price: 2.5 },
      { name: { pt: 'Sumo de laranja natural', en: 'Fresh orange juice' }, price: 4 },
      { name: { pt: 'Coca-Cola / Zero', en: 'Coca-Cola / Zero' }, price: 3 },
      { name: { pt: 'Água tónica', en: 'Tonic water' }, price: 3 },
      { name: { pt: 'Cerveja artesanal', en: 'Craft beer' }, price: 4.5 },
      { name: { pt: 'Café', en: 'Coffee' }, price: 1.2 },
    ],
  },
]
