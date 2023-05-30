import React from 'react';
import '../../styles/allPages.css';
import '../../styles/home.css';

const HomePage = () => {
    return (
        <div className='left'>
            <div className='container'>
                <h1 className='title'>INCOME SYSTEM CONTROL</h1>

                <div class="up">
                    <img class="img-info" src="https://th.bing.com/th/id/OIP.qHRrge25gpFW2Kthj4Qs2AHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7" alt="" />

                    <p className='p-up'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates error est tempore similique veritatis libero perspiciatis architecto, officiis voluptatem eveniet cum commodi ratione praesentium natus ea. Veritatis ab qui amet.</p>
                </div>

                <div class="down">
                    <p className='p-down'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse saepe inventore ad tempore deleniti temporibus, accusantium illum iure veniam aperiam consequatur est quas dolor iusto voluptate quasi ullam nesciunt!</p>

                    <img class="img-info" src="https://th.bing.com/th/id/OIP.qHRrge25gpFW2Kthj4Qs2AHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7" alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
