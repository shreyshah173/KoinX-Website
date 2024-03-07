import React from 'react'
import Check from '../Components/Check'

const About = ({ coinName }) => {
    return (
        <div style={{backgroundColor:'white' , width:'77%' ,margin:'1em' , borderRadius:'1em' , padding:'1.5em'}}>
            <h4 style={{fontWeight:'bold'}}>About {coinName}</h4>
            <h6 style={{fontWeight:'bold'}}>What is {coinName} ?</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, eum minima! Dolorem natus voluptas esse, possimus temporibus accusantium, odit dolores eius exercitationem obcaecati nostrum! Tempore, minus! Dignissimos cumque asperiores aut. Corrupti quidem deserunt reprehenderit, illo nobis repellendus praesentium eos perspiciatis.</p>
            <hr></hr>
            <h6 style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo labore quos veritatis vel facilis iste dicta consectetur atque! Distinctio, animi iste. Libero quibusdam quia, voluptas obcaecati molestiae dolor incidunt porro qui labore quod iure totam adipisci deleniti debitis sequi consequuntur nulla nam. Veritatis quasi est adipisci quae cupiditate nobis doloremque nam sequi eos quod distinctio, aliquid deleniti consequatur cum amet facere nulla voluptatum ducimus! Nesciunt totam eligendi qui consequatur veniam perferendis sit, ipsa ut facilis placeat sequi corporis accusamus minus non laborum perspiciatis iusto nisi eveniet facere voluptatem possimus? Aspernatur accusantium quae, quisquam modi assumenda repellendus ipsa asperiores eveniet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vero cumque. Sit rerum in doloribus maxime, assumenda minima voluptatibus tempore impedit temporibus facilis laudantium nemo perferendis est earum molestias nisi sed. Deserunt sunt porro animi, fugiat a aliquid aperiam ducimus nisi asperiores! Explicabo earum corporis molestiae officiis ab eligendi sapiente natus facilis itaque laborum sequi vitae, optio necessitatibus, deserunt temporibus nisi commodi quisquam dolorum pariatur enim? Sequi officiis numquam ipsa.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo atque distinctio dolorem sapiente ab mollitia expedita ea fugiat nisi et libero nesciunt quis totam neque molestiae consequatur, numquam autem ullam nemo adipisci rem. Et minima, distinctio nemo aliquam, ullam at animi sit maxime omnis perferendis illo! Eveniet ullam sit ipsa deserunt, itaque blanditiis labore ex praesentium expedita numquam quaerat, veniam voluptatem? Neque, cum ex doloremque commodi incidunt pariatur. Sed quidem hic modi odit doloribus maiores odio quae, possimus sequi?</p>
            <hr></hr>
            <h3>Already holding Bitcoin?</h3>
            <hr></hr>
            <Check />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quos nostrum accusantium, quod minima voluptates tempore esse cum! Cumque rem architecto nemo exercitationem in fuga earum quas cum, sapiente corrupti.
        </div>
    )
}

export default About