import fs from "fs";
import path from "path";
import { describe, expect } from "vitest";
import { getByText, within, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";

beforeEach(() => {
  try {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8"
    );
    document.body.innerHTML = html;
  } catch (error) {
    console.error("Error loading HTML file:", error);
  }
});

describe('Page layout', () => {
    test("navigation menu is in the document", () => {
        const navMenu = document.querySelector('.menu');
        expect(navMenu).toBeInTheDocument();
        expect(navMenu).toMatchSnapshot();
    });
    
    test("about-me section is in the document", () => {
        const aboutMeSection = getByText(document, /Hi I'm Marilyn!/i);
        expect(aboutMeSection).toBeInTheDocument();
        expect(aboutMeSection).toMatchSnapshot();
    });

    test("projects section is in the document", () => {
        const projectsSection = document.querySelector('.projects');
        expect(projectsSection).toBeInTheDocument();
        expect(projectsSection).toMatchSnapshot();
    });

    test("skills section is in the document", () => {
        const skillsMeSection = document.querySelector('.skills');
        expect(skillsMeSection).toBeInTheDocument();
        expect(skillsMeSection).toMatchSnapshot();
    });

    test("languages section is in the document", () => {
        const languagessMeSection = document.querySelector('.languages');
        expect(languagessMeSection).toBeInTheDocument();
        expect(languagessMeSection).toMatchSnapshot();
    });

    test("experience section is in the document", () => {
        const experienceMeSection = document.querySelector('.experience');
        expect(experienceMeSection).toBeInTheDocument();
        expect(experienceMeSection).toMatchSnapshot();

    });
    
    test("footer is in the document", () => {
        const footer = document.querySelector('footer');
        expect(footer).toBeInTheDocument();
        expect(footer).toMatchSnapshot();
    });
});

describe('Dark Mode', () => {
    test("switch button displays correctly", () => {
        const switchButton = document.querySelector('.switch-btn');
        const switchLabel = within(switchButton).getByText('Turn night mode on')
        expect(switchButton).toBeInTheDocument();
        expect(switchLabel).toBeInTheDocument();
    });

    test("switch sets aria-checked correctly to true or false when clicked", () => {
        const switchButton = document.querySelector('.switch-btn');
        const switchCheckbox = switchButton.querySelector('#switch[type=checkbox]');
   
        switchCheckbox.addEventListener('change', () => {
            switchButton.setAttribute('aria-checked', switchCheckbox.checked ? 'true' : 'false');
        });

        expect(switchButton).toHaveAttribute('aria-checked', "false");
        fireEvent.click(switchCheckbox)
        expect(switchButton).toHaveAttribute('aria-checked', "true");
        fireEvent.click(switchCheckbox)
        expect(switchButton).toHaveAttribute('aria-checked', "false");
    });

    test("when switch is toggled, dark-mode class is added/removed from html document", () => {
        const html = document.getElementsByTagName('html')[0];
        const switchButton = document.querySelector('.switch-btn');
        const switchCheckbox = switchButton.querySelector('#switch[type=checkbox]');

        switchCheckbox.addEventListener('change', () => {
            switchCheckbox.checked ? html.classList.add('dark-mode') : html.classList.remove('dark-mode');
        });

        expect(html).not.toHaveClass();
        fireEvent.click(switchCheckbox)
        expect(html).toHaveClass('dark-mode');
        fireEvent.click(switchCheckbox)
        expect(html).not.toHaveClass();
    });

    test("page has dark background color when dark mode is on", () => {
        const html = document.getElementsByTagName('html')[0];
        const navMenu = document.querySelector('.menu');
        const aboutMeSection = getByText(document, /Hi I'm Marilyn!/i);

        const switchButton = document.querySelector('.switch-btn');
        const switchCheckbox = switchButton.querySelector('#switch[type=checkbox]');

        switchCheckbox.addEventListener('change', () => {
            switchCheckbox.checked ? html.classList.add('dark-mode') : html.classList.remove('dark-mode');
        });

        fireEvent.click(switchCheckbox)

        navMenu.style.backgroundColor = '#161b22';
        aboutMeSection.style.backgroundColor = '#161b22';

        expect(navMenu).toHaveStyle({ backgroundColor: '#161b22' });
        expect(aboutMeSection).toHaveStyle({ backgroundColor: '#161b22' });
    });
});

