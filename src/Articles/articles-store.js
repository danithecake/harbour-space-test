import articleImg1 from './assets/article1.jpg';
import articleImg2 from './assets/article2.jpg';
import articleImg3 from './assets/article3.jpg';
import articleImg4 from './assets/article4.jpg';
import articleImg5 from './assets/article5.jpg';
import articleImg6 from './assets/article6.jpg';

/** List of predefined articles */
const predefinedArticles = [
  {
    img: articleImg1,
    title: 'tech student stories',
    type: 'article'
  },
  {
    img: articleImg2,
    title: '5 most striking talks from offf barcelona 2017',
    type: 'video'
  },
  {
    img: articleImg3,
    title: 'stanford of europe',
    type: 'article'
  },
  {
    img: articleImg4,
    title: 'design the first native sprot for outer space',
    type: 'video'
  },
  {
    img: articleImg5,
    title: 'next in space: we take mars',
    type: 'article'
  },
  {
    img: articleImg6,
    title: 'meet the batch of 2017',
    type: 'video'
  }
];

/** List of generated articles */
const generatedArticles = [];

for (let i = 0; i < predefinedArticles.length; i++) {
  for (let n = 0; n < 4; n++) {
    const article = {
      ...predefinedArticles[Math.floor(Math.random() * predefinedArticles.length)],
      author: 'Simge Toksoz'
    }

    generatedArticles.push(article);
  }
}

function filter(fn: () => {}) {
  return generatedArticles.filter(fn);
}

function all() {
  return generatedArticles.slice(0, generatedArticles.length);
}

export default {filter, all};
