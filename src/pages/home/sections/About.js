import React from 'react';

import styled from 'styled-components'
import { TitleSection } from '../styles'; 
import Dude from '../../../common/components/Dude'

const TechList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1.5rem 0 3rem 15px;
    
    display: grid;
    grid-template-columns: repeat(2,minmax(150px,10px));
    
    > * {
        position: relative;
        
        :before {
            content: "▹ ";
            position: absolute;
            left: -15px;
            color: red;
        }
    }
`

function AboutSection() {
    return (
            <section className='mt-5 row'>
                <div className="col-12 ">
                    <TitleSection className='mb-4'>about</TitleSection>
                </div>
                <main className="col-md-8">
                    <p>
                        I am currently studying <strong>Analysis and System Development</strong> at <strong>Estácio de Sá</strong>
                        , with a focus in <strong>Web Development</strong>. In the same month that i started my college degree
                        , i'd the lucky to get an internship and get experience with <strong>Javascript</strong> early.
                    </p>
                    <p>
                        The Front-End development is where i feel 100% comfortable
                        , but i'm really into any way of development that i can use my <strong>creativity</strong> and <strong>problem solving skills</strong>. 
                    </p>
                    <span>
                        Here are some technologies I have been working with:
                    </span>

                    <TechList>
                        <li>Vue.js</li>
                        <li>Nuxt</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>Next</li>
                        <li>Node.js</li>
                        <li>Bootstrap</li>
                        <li>TailwindCss</li>
                        <li>Sass</li>
                        <li>PostCss</li>
                    </TechList>
                </main>
                <aside className="offset-md-1 col-md-3 d-flex justify-content-center justify-content-md-end align-items-md-end">
                    <Dude dudeColor="hsl(144deg 60% 50%)" />
                </aside>
            </section>
    );
  }
  
  export default AboutSection;
  