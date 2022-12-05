import { About } from './components/About';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import React from 'react';


function App() {

  const feedback = [
    {
      name: "Hanaé Sory",
      photo: 1,
      job: "EN/NL > FR translator",
      location: "mouscron, belgium",
      rating: 5,
      date: "2021-12-08",
      linkedin: "joe doe linkedin ",
      feedback_fr: `Très bonne traduction juridique depuis le français!`,
      feedback_en: `Very good legal translation from French!`,
    },
    {
      name: "Conor McAuley",
      photo: 2,
      job: "FR > EN translator",
      location: "dijon, bourgogne, france",
      rating: 5,
      date: "2021-09-27",
      linkedin: "joe doe linkedin ",
      feedback_fr: `Aidan est très facile à travailler, très professionnel et écrit très bien. En juillet et août 2021, il a traduit environ 8 300 mots pour moi, et le niveau de sa traduction était excellent. J'ai hâte de faire affaire avec lui à nouveau.`,
      feedback_en: `Aidan is very easy to work with, highly professional, and writes very well. In July and August 2021 he translated approximately 8,300 words for me, and the standard of his translation was excellent. I look forward to doing business with him again.`,
    },
    {
      name: "Damar",
      photo: 3,
      job: "translations studio",
      location: "sosnowiec, slaskie, poland",
      rating: 5,
      date: "2021-02-26",
      linkedin: "joe doe linkedin ",
      feedback_fr: `Très heureux de notre coopération (relecture native FR-EN). Très bon et agréable contact, flexible dans les délais. Bonne qualité. Je peux recommander Aidan! J'espère que la coopération se poursuivra à l'avenir.`,
      feedback_en: `Very glad with our cooperation (native proofreading FR-EN). Very good and nice contact, flexible in deadlines. Good quality. I can totally recommend Aidan! I hope for further cooperation in the future.`,
    },
  ];
  return (
    <div className='App'>
      <header>
        <Nav />
        <Hero/>
      </header>
      <main>
        <Services/>
        <Testimonials feedback={feedback}/>
        <About/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
