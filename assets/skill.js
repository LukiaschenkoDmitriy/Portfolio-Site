import "./styles/skill/skill.scss";

hljs.highlightAll();
import { scrollIntoViewBy } from "./project";

function headerFunctions() {
    let main_href = window.location.href.split("/");
    main_href = main_href[0]+"//"+main_href[1]+main_href[2];
    console.log(main_href)

    $(".head-home-button").on("click", function() {
        window.location.replace(main_href);
    });

    $(".head-about-me-button").on("click", function() {
        window.location.replace(main_href+"#chapter-title-about-me");
    })

    $(".head-resume-button").on("click", function() {
        window.location.replace(main_href+"#chapter-title-resume")
    })

    $(".head-skills-button").on("click", function() {
        window.location.replace(main_href+"#chapter-title-skills");
    })

    scrollIntoViewBy(".wrapp-contact-container", ".head-contacts-button");
}

headerFunctions();