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
    const themeId: number = 4;
    // Select a random country from the list.
    const selectedCountry = getRandomCountry(europeanCountries);
    const questionText = `Quelle est la capitale de ${selectedCountry.name} ?`;
    const correctAnswer = selectedCountry.capital;

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

    return new MultipleChoiceQuestion(
        id,
        'multiple-choice',
        questionText,
        correctAnswer,
        themeId,
        options
    );
}
export function generateAfricanCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();
    const themeId: number = 4;
    // Select a random country from the list.
    const selectedCountry = getRandomCountry(africanCountries);
    const questionText = `Quelle est la capitale de ${selectedCountry.name} ?`;
    const correctAnswer = selectedCountry.capital;

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

    return new MultipleChoiceQuestion(
        id,
        'multiple-choice',
        questionText,
        correctAnswer,
        themeId,
        options
    );
}
export function generateAsianCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();
    const themeId: number = 4;
    // Select a random country from the list.
    const selectedCountry = getRandomCountry(asianCountries);
    const questionText = `Quelle est la capitale de ${selectedCountry.name} ?`;
    const correctAnswer = selectedCountry.capital;
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

    return new MultipleChoiceQuestion(
        id,
        'multiple-choice',
        questionText,
        correctAnswer,
        themeId,
        options
    );
}
export function generateAmericanCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();
    const themeId: number = 4;
    // Select a random country from the list.
    const selectedCountry = getRandomCountry(americanCountries);
    const questionText = `Quelle est la capitale de ${selectedCountry.name} ?`;
    const correctAnswer = selectedCountry.capital;
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

    return new MultipleChoiceQuestion(
        id,
        'multiple-choice',
        questionText,
        correctAnswer,
        themeId,
        options
    );
}
export function generateOceanicCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();
    const themeId: number = 4;
    // Select a random country from the list.
    const selectedCountry = getRandomCountry(oceanicCountries);
    const questionText = `Quelle est la capitale de ${selectedCountry.name} ?`;
    const correctAnswer = selectedCountry.capital;
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

    return new MultipleChoiceQuestion(
        id,
        'multiple-choice',
        questionText,
        correctAnswer,
        themeId,
        options
    );
}

export function generateRandomCountriesQuestion(): MultipleChoiceQuestion {
    const id: number = generateNumberId();
    const themeId: number = 4;
    const allCountries = [
        ...europeanCountries,
        ...africanCountries,
        ...americanCountries,
        ...oceanicCountries,
        ...asianCountries,
    ];

    const selectedCountry = getRandomCountry(allCountries);
    const questionText = `Quelle est la capitale de ${selectedCountry.name} ?`;
    const correctAnswer = selectedCountry.capital;
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

    return new MultipleChoiceQuestion(
        id,
        'multiple-choice',
        questionText,
        correctAnswer,
        themeId,
        options
    );
}
