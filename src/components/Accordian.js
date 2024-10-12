import React, { useState } from 'react';

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const d = [
        {
            name: 'HTML',
            data: 'HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It uses a system of tags to define elements like headings, paragraphs, links, images, and more. HTML forms the backbone of web pages, providing the layout and format for browsers to render content.'
        },
        {
            name: 'Java',
            data: 'Java is a high-level, object-oriented programming language known for its platform independence, meaning code can run on any system with a Java Virtual Machine (JVM). It is widely used for building web applications, Android apps, and enterprise-level systems. Java emphasizes security, robustness, and simplicity.'
        },
        {
            name: 'CSS',
            data: 'CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of HTML elements on a web page. It allows developers to style fonts, colors, spacing, and positioning, creating visually appealing and responsive designs. CSS separates content from design, making it easier to maintain and update web pages.'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {d.map((item, index) => (
                <section
                    key={index}
                    style={{ backgroundColor: 'yellow', marginBottom: '10px', padding: '10px' }}
                    onClick={() => toggleAccordion(index)}
                >
                    <div>
                        {item.name}
                        <span style={{ float: 'right' }}>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && <p>{item.data}</p>}
                </section>
            ))}
        </div>
    );
}

export default Accordion;
