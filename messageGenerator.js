//Array with all the 1st part of the message: Today's situation.
const arrayPart1 = [
    "Les alignements planétaires enflamment votre audace naturelle. ",
    "La lune en Scorpion éveille votre confiance en soi. ",
    "Aujourd'hui, grâce à Pluton en trigone avec le Soleil, vous rayonnez d'une énergie positive. ",
    "La conjonction du Soleil et de Vénus annonce une vague d'harmonie. ",
    "L'aspect trigone entre Mars et la Lune donne une puissance productive. ",
    "Avec le Soleil formant un sextile fort avec Neptune cette journée exhale une énergie de changement. ",
    "Avec Neptune en sextile à Pluton cette journée est propice à la communication sincère. ",
    "Aujourd'hui Vénus invite à la légèreté. ",
    "Aujourd'hui, l'influence de Jupiter en conjonction avec Vénus favorise la prise d'initiative. ",
    "La conjonction Soleil-Jupiter présage une journée prometteuse. ",
    "L'opposition de la Lune à Uranus impulse une énergie propice aux changements. ",
    "Le Soleil conjoint à Jupiter aujourd'hui apporte une vague de chance. ",
    "La présence de Mars dans votre signe génère un influx énergique. ",
    "Avec Jupiter en conjonction à Uranus, attendez vous à un coup de punch aujourd'hui. ",
    "Mercure et Jupiter, unissant leurs forces dans votre signe, stimulent votre curiosité. "
];

//Array with all the 2nd part of the message: initiative.
const arrayPart2 = [
    "C'est le moment idéal pour déléguer certaines tâches. ",
    "Utilisez cet avantage pour exceller dans une activité que vous maîtrisez. ",
    "C'est pourquoi de nouvelles rencontres se profilent à l'horizon. ",
    "Profitez en pour vous accorder un moment de tranquillité rien qu'à vous. ",
    "C'est le moment ou jamais de demander ce que vous attendez. ",
    "Prenez donc le temps de réfléchir et favorisez le calme. ",
    "Vous pourriez en profiter pour envisager un nouveau projet. ",
    "Prenez le temps de rire et de vous divertir. ",
    "C'est le moment de chercher de nouvelles opportunités. ",
    "Profitez en pour avancer dans vos projets. ",
    "Vous pouvez donc vous fier à votre instinct. ",
    "Cette influence pourrait déclencher un élan d'originalité et favoriser le renouveau dans votre vie. ",
    "C'est le moment parfait pour réaliser les changements espérés. ",
    "C'est l'occasion de canaliser votre énergie pour réaliser vos projets. ",
    "C'est le moment de prendre du recul. "
];

//Array with all the 3th part of the message: warning
const arrayPart3 = [
    "Toutefois n'oubliez pas de troquer l'impatience pour la sérénité.",
    "Cependant il faudra rester zen devant les aspérités relationnelles.",
    "N'hésitez pas à relevez le défi d'une activité inédite.",
    "En revanche, adaptation et flexibilité seront nécessaires.",
    "Toutefois, il faudra savoir imposer vos limites.",
    "Cependant, n'oubliez pas de rester calme face à une confrontation imprévue.",
    "Pensez bien à respirer profondément et compter jusqu'à dix avant d'agir.",
    "Faites vous confiance, tout est possible !",
    "En revanche, attention aux décisions hâtives!",
    "Néanmoins, attention à ne pas vous précipiter !",
    "Attention, il y a du positif, mais restez vigilant pour éviter les faux pas.",
    "En revanche il faudra résistez à la tentation de renoncer.",
    "Cependant ne vous laissez pas submerger par la rapidité des événements.",
    "Attention cependant à ne pas négliger vos obligations.",
    "Le principal étant de rester optimiste et de tout donner!"
];

//generate random index to get a part from one of each array
const first = arrayPart1[Math.floor(Math.random()*15)];
const second = arrayPart2[Math.floor(Math.random()*15)];
const third = arrayPart3[Math.floor(Math.random()*15)];

const resultat = first + second + third;