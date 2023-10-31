// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [{
     quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
     author: '"Nelson Mandela"'
    }, {
     quote: '"The way to get started is to quit talking and begin doing."',
     author: '"Walt Disney"'
    }, {
     quote: '"Your time is limited, so don not waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
     author: '"Steve Jobs"'
    }, {
     quote: '"The future belongs to those who believe in the beauty of their dreams."',
     author: '"Eleanor Roosevelt"'
    }, {
     quote: '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."',
     author: '"Oprah Winfrey"'
    }, {
     quote: '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success."',
     author: '"James Cameron"'
    }, {
     quote: '"You must be the change you wish to see in the world."',
     author: '"Mahatma Gandhi"'
    }, {
     quote: '"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
     author: '"Mother Teresa"'
    }, {
     quote: '"The only thing we have to fear is fear itself."',
     author: '"Franklin D. Roosevelt"'
    }, {
     quote: '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
     author: '"Martin Luther King Jr."'
    }, {
     quote: '"Well done is better than well said."',
     author: '"Benjamin Franklin"'
    }, {
     quote: '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."',
     author: '"Helen Keller"'
    }, {
     quote: '"It is during our darkest moments that we must focus to see the light."',
     author: '"Aristotle"'
    }, {
     quote: '"Do not go where the path may lead, go instead where there is no path and leave a trail."',
     author: '"Ralph Waldo Emerson"'
    }, {
     quote: '"Be yourself; everyone else is already taken."',
     author: '"Oscar Wilde"'
    }, {
     quote: '"You will face many defeats in life, but never let yourself be defeated."',
     author: '"Maya Angelou"'
    }, {
     quote: '"Go confidently in the direction of your dreams! Live the life you\'ve imagined."',
     author: '"Henry David Thoreau"'
    }, {
     quote: '"In the end, it\'s not the years in your life that count. It\'s the life in your years."',
     author: '"Abraham Lincoln"'
    }, {
     quote: '"Never let the fear of striking out keep you from playing the game."',
     author: '"Babe Ruth"'
    }, {
     quote: '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."',
     author: '"Thomas A. Edison"'
    }, {
     quote: '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."',
     author: '"Dr. Seuss"'
    }, {
     quote: '"Life is either a daring adventure or nothing."',
     author: '"Helen Keller"'
    }, {
     quote: '"Life is really simple, but we insist on making it complicated."',
     author: '"Confucius"'
    }, {
     quote: '"Life is a long lesson in humility."',
     author: '"James M. Barrie"'
    }, {
     quote: '"Life is made of ever so many partings welded together."',
     author: '"Charles Dickens"'
    }, {
     quote: '"Life is trying things to see if they work."',
     author: '"Ray Bradbury"'
    }, {
     quote: '"Success is not final; failure is not fatal: It is the courage to continue that counts."',
     author: '"Winston S. Churchill"'
    }, {
     quote: '"Success usually comes to those who are too busy to be looking for it."',
     author: '"Henry David Thoreau"'
    }, {
     quote: '"If you want to make your dreams come true, the first thing you have to do is wake up."',
     author: '"J.M. Power"'
    }, {
     quote: '"If you really look closely, most overnight successes took a long time."',
     author: '"Steve Jobs"'
    }, {
     quote: '"The secret of success is to do the common thing uncommonly well."',
     author: '"John D. Rockefeller Jr."'
    }, {
     quote: '"I find that the harder I work, the more luck I seem to have."',
     author: '"Thomas Jefferson"'
    }, {
     quote: '"You miss 100% of the shots you don\'t take."',
     author: '"Wayne Gretzky"'
    }, {
     quote: '"Whether you think you can or you think you can\'t, you\'re right."',
     author: '"Henry Ford"'
    }, {
     quote: '"I have learned over the years that when one\'s mind is made up, this diminishes fear."',
     author: '"Rosa Parks"'
    }, {
     quote: '"I\'m not upset that you lied to me, I\'m upset that from now on I can\'t believe you."',
     author: '"Friedrich Wilhelm Nietzsche"'
    }, {
     quote: '"Keep your friends for friendship, but work with the skilled and competent"',
     author: '"Robert Greene"'
    }, {
     quote: '"Compare yourself to who you were yesterday, not to who someone else is today."',
     author: '"Jordan Peterson"'
    }, {
     quote: '"Reality is politically incorrect, winners embrace this, losers don’t."',
     author: '"Illimitable Man"'
    }, {
     quote: '"It is better to be feared than loved, if you cannot be both."',
     author: '"Niccolo Machiavelli"'
    }, {
     quote: '"The only true wisdom is in knowing you know nothing."',
     author: '"Socrates"'
    }, {
     quote: '"When our emotions are engaged, we often have trouble seeing things as they are."',
     author: '"Robert Greene"'
    }, {
     quote: '"You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."',
     author: '"Friedrich Wilhelm Nietzsche"'
    }, {
     quote: '"You only lose what you cling to."',
     author: '"buddha"'
    }, {
     quote: '"You only lose what you cling to."',
     author: '"buddha"'
    }, {
     quote: '"I cannot teach anybody anything. I can only make them think"',
     author: '"Socrates"'
    }, {
     quote: '"There is no avoiding war; it can only be postponed to the advantage of others."',
     author: '"Niccolo Machiavelli"'
    }, {
     quote: '"Pursue what is meaningful (not what is expedient)."',
     author: '"Jordan Peterson"'
    }, {
     quote: '"He who has a why to live for can bear almost any how."',
     author: '"Friedrich Nietzsche"'
    }];

btn.addEventListener('click', function (){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
});