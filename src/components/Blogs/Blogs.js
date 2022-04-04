import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container my-4'>
            <article>
                <h3>Here you will get the Answers of 3 Questions.</h3>
                <div className='text-start my-5'>
                    <Card>
                        <Card.Header>Question 1</Card.Header>
                        <Card.Body>
                            <Card.Title>What is Context API?</Card.Title>
                            <Card.Text>
                                <p>Context API is a React Structure that provides a way to exchange data through component tree without prop-drilling from all levels of application. In a typical React application for passing data you had to use "prop drilling" which will pass data top-down(parents to child). But, the Context API provides the way to pass data globally. </p>
                                <h6>Steps of Context API :</h6>
                                <ul>
                                    <li>Call React.createContext with a default value.</li>
                                    <li>Set a variable of the context with uppercase.</li>
                                    <li>Make sure you export the context to use it in other places.</li>
                                    <li>Wrap your child content using RingContext.Provider.</li>
                                    <li>Provide a value.</li>
                                    <li>To consume the context from child component.</li>
                                    <li>useContext hook and you will need to pass the contexName</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='my-4'>
                        <Card.Header>Question 2</Card.Header>
                        <Card.Body>
                            <Card.Title>What is Semantic tag?</Card.Title>
                            <Card.Text>
                                Semantic tag is HTML tag which provides the same information to browser and developer both. By semantic tag we can clearly understand which sector it is. It clearly defines its content. Before semantic tag, the tag was like, "div", "span" etc.. which made a developer confused enough. Here are some example of semantic tag: "article" "aside" "details" "figcaption" "figure" "footer" "header".
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Question 3</Card.Header>
                        <Card.Body>
                            <Card.Title>What is Context API?</Card.Title>
                            <Card.Text>
                                <p>Inline elements: Inline elements don't need a new line to start and it don't take the space of the whole line all it needs is just the width it requires. The width or height can't be set.</p>
                                <p>Block elements: Block elements need a new line to start and it takes the full width of this line. You can set the height and width value.</p>
                                <p>Inline-block elements: Inline-block elements are like Inline elements , it don't need a new line to start and don't take the full width also. But, the height and width can be set here.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </article>
        </div>
    );
};

export default Blogs;