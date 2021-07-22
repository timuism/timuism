import * as React from "react";
import PageTemplate from '../components/templates/page';
import Card from "../components/card";
import Link from "../components/link";
import "../styles/global.css";


const WorkSamplesPage = () => {

    const LarutaSites = [
        {href: 'https://macpa.org', text: 'Maryland Association of Certified Public Accounts'},
        {href: 'https://blionline.org', text: 'Business Learning Institute'},
        {href: 'https://msba.org', text: 'Maryland State Bar Association'},
        {href: 'https://cocpa.org', text: 'Colorado Society of CPAs'},
    ];
    
    return (
        <PageTemplate>
            <div>
                <Card>
                    <h1 class="text-2xl gray-800 font-semibold">Laruta</h1>
                    <div className="py-2 space-y-2">
                        <p>Laruta is a web application that I have been a part of developing during my time with Blue Ocean Ideas. While, there have been a handful of developers that have touched the application (including the front-end), a good amount of the front end development work on the below sites has been implemented or updated by me.</p>
                        <p>
                            A lot of the features are behind a member subscription and difficult to showcase, but the code within the <em>Laruta</em> directory (in the code samples <Link href="https://github.com/timuism/code-samples" text="repo" />/directory provided) comes from Laruta.
                        </p>
                        <p><strong>Technologies used:</strong> HTML, CSS, LESS, SCSS, Semantic UI, Bootstrap, Javascript, jQuery, SelectJs, Algolia + React Instant Search, Vanilla JS, Wordpress, Laravel, Woocommerce, Gravity Forms, Advanced Custom Fields </p>
                    </div>
                    <ul>
                        {
                            LarutaSites.map((link) => (
                                <li>
                                    <Link href={link.href} text={link.text} />
                                </li>
                            ))
                        }
                    </ul>
                
                </Card>
            </div>
        </PageTemplate>
        
    );
};

export default WorkSamplesPage;