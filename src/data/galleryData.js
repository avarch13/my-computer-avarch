const modules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,svg,JPG,PNG}', { eager: true });

const imageDescriptions = {
  'academia1.jpg': 'Esse é basicamente o lugar que cresci. \nEu tinha uns 16 anos nessa foto. \n \nEsse lugar é uma mistura de dois extremos para mim: é extremamente confortável ao mesmo tempo que muito hostil. \n \n \nAcho que algumas casas são assim.',
  'sushiragun1.png': 'Trabalhei por alguns anos como sushiman. Foram muitas dificuldades e muito aprendizado. \n \nEu amo fazer sushi, mas o desgaste com o tempo me fez afastar da area da cozinha. \nNo fim sou grato as pessoas com quem trabalhei, mesmo nos momentos dificeis.',
  'festajunina.jpg': 'Eu sempre amei festa junina, tem algo que me atrai em festas no geral, gosto de ver pessoas se divertindo. \nE claro, eu aproveitava cada festa junina escolar: ja fui noivo, noiva, padrinho e até a cobra \n \nEu espero poder participar de muito mais.',
  'jonataediego.jpg': 'Jonatan e Diego. \n \nO que eu ja pertubei esses dois...',
  'euevickmario.jpg': 'Eu e a Vick. \n\nEu meio que forcei ela a tirar essa foto comigo xD',
  'euepower.jpg': 'Só deus sabe o quanto eu queria vestir um uniforme desses...',
  'amigosbgs.jpg': 'BGS foi cansativo mas divertido. \n\nPelo que meus amigos disseram, já foi melhor antes...',
  'exilebgs.jpg': 'Eu e o Mauricio enfrentamos fila pra entrar no evento do Path of Exile: uma corrida de 20 minutos para matar o máximo de Bosses possivel.',
  'premioexile.jpg': 'E Nós ganhamos!',
  'ibituruna1.jpg': 'Tem algo de atraente nessa pedra gigante. \n\nEu subi diversas vezes como se houvesse algo lá que preciso encontrar.',
  'olhos.jpg': 'Olhos.',
  'eventomma2016.jpg': 'Parece todo mundo feliz mas teve um briga enorme nesse evento.',
  'euemestre.jpg': 'Eu ja sou pequeno, perto do mestre então...',
  'infancia1.jpg': 'Cachoeira do Porto. \n\nTanto sofrimento resultando numa pose pra foto me intriga.',
  'mestreealunos1.jpg': 'Mestre e alunos.',
  'tiadoleo.jpg': 'De todas as fotos que consegui guardar sobre viagem para campeonatos, essa deve ser a mais lendária. \n\nNós ficamos na casa da tia do Leo por 2 dias. Ela nos recebeu com um banquete. \n\nPra minha tristeza, eu não podia comer nada pois estava no limite de peso da minha categoria.',
  'dormindo2.jpg': 'Eu tenho um \"fama\" de dormir em lugares inusitados. \n\nAlguns treinos eram tão pesados que no intervalo entre um treino e outro eu dormia em qualquer lugar que encontrava.',
  'dormindo1.jpg': 'Eu estava dormindo acredite se quiser.',
  'infancia4.jpg': 'Tipo, olha pra essas crianças! Quem maltrataria elas?',
  'eu1.jpg': 'Eu.'

};

const images = Object.entries(modules).map(([path, mod]) => {
  const name = path.split('/').pop();

  return {
    src: mod.default,
    name,
    description: imageDescriptions[name] || '',
  };
});

export default images;