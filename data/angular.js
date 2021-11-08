const bestpractices = [
    {
        "title": "Follow Conventions",
        "contents": [
            {
                "type": "list",
                "data": [
                    "One of the core arguments to choose a framework over traditional way with Vanilla JavaScript is its clearly defined way of how things are supposed to be done.",
                    "That defined way enables the creation of a uniform code base across an organization, without worrying about defining certain rules.",
                    "Following them does not only increase the uniformity and therefore the quality of the code.",
                    "This strict approach also comes in handy across cooperation borders.",
                    "It enables new developers to integrate into a new team very quickly, because of the high familiarity with the code. We should follow the Angular Style Guide to get the most out of the Angular Framework.",
                    "It will make our life a lot easier, when coming into new projects and will increase the quality of our code almost automatically."
                ]
            }
        ]
    },
    {
        "title": "Use Angular CLI",
        "contents": [
            {
                "type": "paragraph",
                "data": [
                    "The Angular CLI is the best way to build Angular Applications. Angular CLI can be installed easily via terminal by typing in the following command: "
                ]
            },
            {
                "type": "code",
                "data": [
                    "npm install -g @angular/cli"
                ]
            },
            {
                "type": "paragraph",
                "data": [
                    "The CLI has scaffolding tools for creating new projects and generating new code, such as, modules, services, components, directives and pipes. However, this isn't the main benefit. The main benefit of the CLI is the way it automates the build pipeline for both live development with ng serve, as well as for production code that we would ship down to browsers with ng build --prod. Other common commands available are ng lint, ng test and ng e2e."
                ]
            }
        ]
    },
    {
        "title": "Isolate API Hacks",
        "contents": [
            {
                "type": "paragraph",
                "data": [
                    "Sometimes, we need to add some logic in the code to make up for bugs in the APIs. Instead of having the hacks in components where they are needed, it is better to isolate them in one place like in a function or a service and use them. When fixing the bugs in the APIs, it is easier to look for them in one file rather than looking for the hacks that could be spread across the codebase."
                ]
            }
        ]
    },
    {
        "title": "Prefer Observables over Promises",
        "contents": [
            {
                "type": "paragraph",
                "data": [
                    "Observables partly overlaps the standard JavaScript Promise functionality. Both are meant to handle asynchronous code. However, Observables can do so much more than Promises. Observables can resolve to more than just one value, because they are a stream of values. Observables are everywhere in Angular Framework.",
                    "We can see that, by looking at the Angular HttpClient. It returns Observables, even when it is clear, that a HTTP call can never result in more than one response. Mixing Observables with Promises isn't a good solution. That way, we have completely different implementations, that are hardly compatible with each other in different parts of our application."
                ]
            }
        ]
    }
];

export default bestpractices;
