import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Clock, Book, Code, Lightbulb } from 'lucide-react';

const roadmapData = [
  {
    title: "Introduction à Python pour la Data Science",
    duration: "1-2 semaines",
    description: "Maîtriser les bases de Python pour la manipulation de données et l'analyse.",
    content: [
      {
        subtitle: "Concepts de Base de Python",
        details: [
          "Variables et types de données",
          "Structures de contrôle (if, for, while)",
          "Fonctions et modules",
          "Structures de données (listes, dictionnaires, tuples)",
          "Programmation orientée objet"
        ]
      },
      {
        subtitle: "Exercices Pratiques",
        details: [
          "Création d'une application de gestion de tâches",
          "Manipulation de données avec les structures Python",
          "Implémentation d'algorithmes simples"
        ]
      }
    ]
  },
  {
    title: "Gestion de Version avec Git et GitHub",
    duration: "1 semaine",
    description: "Apprendre à utiliser Git pour le contrôle de version et collaborer sur GitHub.",
    content: [
      {
        subtitle: "Introduction à Git",
        details: [
          "Initialisation de dépôts (git init)",
          "Suivi des modifications (git add, git commit)",
          "Branches et fusions (git branch, git merge)",
          "Résolution des conflits"
        ]
      },
      {
        subtitle: "Collaboration avec GitHub",
        details: [
          "Création et gestion de dépôts distants",
          "Pull requests et revue de code",
          "Issues et gestion de projet",
          "Bonnes pratiques de collaboration"
        ]
      },
      {
        subtitle: "Automatisation avec GitHub Actions",
        details: [
          "Configuration de workflows CI/CD",
          "Automatisation des tests",
          "Déploiement continu"
        ]
      }
    ]
  },
  // ... Ajoutez les autres étapes de la roadmap ici
];

const StepContent = ({ content }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full">
      {content.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
          >
            <div className="flex items-center">
              <Lightbulb className="mr-2 h-4 w-4" />
              <span className="font-medium">{item.subtitle}</span>
            </div>
            {openIndex === index ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {openIndex === index && (
            <ul className="list-disc pl-6 mt-2 ml-6">
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="mb-1">{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

const RoadmapStep = ({ step, index }) => (
  <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
      <div className="flex justify-between items-center mb-2">
        <span className="px-2 py-1 bg-white text-blue-600 text-xs font-bold rounded-full">Étape {index + 1}</span>
        <div className="flex items-center">
          <Clock className="mr-2 h-4 w-4" />
          <span className="text-sm">{step.duration}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold">{step.title}</h3>
    </div>
    <div className="p-4">
      <p className="mb-4 text-gray-600">{step.description}</p>
      <StepContent content={step.content} />
    </div>
  </div>
);

const MachineLearningRoadmap = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Machine Learning Roadmap
      </h1>
      <p className="text-xl text-gray-600 mb-12 text-center">
        Une roadmap structurée pour maîtriser le Machine Learning avec Git, GitHub, Flask, et des projets pratiques
      </p>
      <div className="space-y-8">
        {roadmapData.map((step, index) => (
          <RoadmapStep key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MachineLearningRoadmap;