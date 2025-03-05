import {
    Country,
    africanCountries,
    americanCountries,
    asianCountries,
    europeanCountries,
    oceanicCountries,
} from '../../../application/geography.data/geography.capital';
import { shuffleOptionsArray } from '../../../lib/shuffle-array';
import { MultipleChoiceQuestion } from '../../../domain/Question';
import { generateNumberId } from '../../../lib/id-generator';

function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCountry(array: Country[]): Country {
    const randomIndex = getRandomInteger(0, array.length - 1);
    const selectedCountry = array[randomIndex];

    return selectedCountry;
}

export function generateEuropeanCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();

    // Select a random country from the list.
    const selectedCountry = getRandomCountry(europeanCountries);

    // Generate 3 wrong answers.
    const wrongAnswers = new Set<string>();
    while (wrongAnswers.size < 3) {
        const randomIndex = getRandomInteger(0, europeanCountries.length - 1);
        const randomCapital = europeanCountries[randomIndex].capital;
        if (randomCapital !== selectedCountry.capital) {
            wrongAnswers.add(randomCapital);
        }
    }

    // Mixes options (good + wrongs) for the question
    const options = Array.from(wrongAnswers);
    options.push(selectedCountry.capital);
    shuffleOptionsArray(options);

    return {
        id,
        questionText: `Quelle est la capitale de ${selectedCountry.name} ?`,
        choices: options,
        correctAnswer: selectedCountry.capital,
        themeId: 4,
    };
}
export function generateAfricanCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();

    // Select a random country from the list.
    const selectedCountry = getRandomCountry(africanCountries);

    // Generate 3 wrong answers.
    const wrongAnswers = new Set<string>();
    while (wrongAnswers.size < 3) {
        const randomIndex = getRandomInteger(0, africanCountries.length - 1);
        const randomCapital = africanCountries[randomIndex].capital;
        if (randomCapital !== selectedCountry.capital) {
            wrongAnswers.add(randomCapital);
        }
    }

    //Mixes options (good + wrongs) for the question
    const options = Array.from(wrongAnswers);
    options.push(selectedCountry.capital);
    shuffleOptionsArray(options);

    return {
        id,
        questionText: `Quelle est la capitale de ${selectedCountry.name} ?`,
        choices: options,
        correctAnswer: selectedCountry.capital,
        themeId: 4,
    };
}
export function generateAsianCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();

    // Select a random country from the list.
    const selectedCountry = getRandomCountry(asianCountries);

    // Generate 3 wrong answers.
    const wrongAnswers = new Set<string>();
    while (wrongAnswers.size < 3) {
        const randomIndex = getRandomInteger(0, asianCountries.length - 1);
        const randomCapital = asianCountries[randomIndex].capital;
        if (randomCapital !== selectedCountry.capital) {
            wrongAnswers.add(randomCapital);
        }
    }

    // Mixes options (good + wrongs) for the question
    const options = Array.from(wrongAnswers);
    options.push(selectedCountry.capital);
    shuffleOptionsArray(options);

    return {
        id,
        questionText: `Quelle est la capitale de ${selectedCountry.name} ?`,
        choices: options,
        correctAnswer: selectedCountry.capital,
        themeId: 4,
    };
}
export function generateAmericanCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();

    // Select a random country from the list.
    const selectedCountry = getRandomCountry(americanCountries);

    // Generate 3 wrong answers.
    const wrongAnswers = new Set<string>();
    while (wrongAnswers.size < 3) {
        const randomIndex = getRandomInteger(0, americanCountries.length - 1);
        const randomCapital = americanCountries[randomIndex].capital;
        if (randomCapital !== selectedCountry.capital) {
            wrongAnswers.add(randomCapital);
        }
    }

    //Mixes options (good + wrongs) for the question
    const options = Array.from(wrongAnswers);
    options.push(selectedCountry.capital);
    shuffleOptionsArray(options);

    return {
        id,
        questionText: `Quelle est la capitale de ${selectedCountry.name} ?`,
        choices: options,
        correctAnswer: selectedCountry.capital,
        themeId: 4,
    };
}
export function generateOceanicCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();

    // Select a random country from the list.
    const selectedCountry = getRandomCountry(oceanicCountries);

    // Generate 3 wrong answers.
    const wrongAnswers = new Set<string>();
    while (wrongAnswers.size < 3) {
        const randomIndex = getRandomInteger(0, oceanicCountries.length - 1);
        const randomCapital = oceanicCountries[randomIndex].capital;
        if (randomCapital !== selectedCountry.capital) {
            wrongAnswers.add(randomCapital);
        }
    }

    //Mixes options (good + wrongs) for the question
    const options = Array.from(wrongAnswers);
    options.push(selectedCountry.capital);
    shuffleOptionsArray(options);

    return {
        id,
        questionText: `Quelle est la capitale de ${selectedCountry.name} ?`,
        choices: options,
        correctAnswer: selectedCountry.capital,
        themeId: 4,
    };
}

export function generateRandomCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();
    const allCountries = [
        ...europeanCountries,
        ...africanCountries,
        ...americanCountries,
        ...oceanicCountries,
        ...asianCountries,
    ];

    const selectedCountry = getRandomCountry(allCountries);

    // generate 3 wrong answers
    const wrongAnswers = new Set<string>();
    while (wrongAnswers.size < 3) {
        const randomIndex = getRandomInteger(0, allCountries.length - 1);
        const randomCapital = allCountries[randomIndex].capital;
        if (randomCapital !== selectedCountry.capital) {
            wrongAnswers.add(randomCapital);
        }
    }

    //Mixes options (good + wrong) for the question
    const options = Array.from(wrongAnswers);
    options.push(selectedCountry.capital);
    shuffleOptionsArray(options);

    return {
        id,
        questionText: `Quelle est la capitale de ${selectedCountry.name} ?`,
        choices: options,
        correctAnswer: selectedCountry.capital,
        themeId: 4,
    };
}
