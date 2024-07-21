# TennisGame

## Partie 1 
| ODEURS                                | GRAVITE   | RECURRENCE  | RISQUE |
|---------------------------------------|-----------|-------------|--------|
| préfixage                             | moyenne   | courante    | 1      |
| verbatim                              | Forte     | fréquente   | 4      |
| get_score trop de responsabilités     | Critique  | Rare        | 6      |
| getter faisant des calculs complexes  | Critique  | Rare        | 6      |
| structures de contrôle imbriquées     | Forte     | Fréquente   | 5      |


## Partie 2  - Nettoyage du Code et Implémentation de la Fonctionnalité Multilingue

### Plan d'Action

1. **Utilisation de Constantes pour les Chaînes Littérales :**
    - État Actuel : Utilisation de chaînes littérales directement dans le code, ce qui augmente le risque de fautes de frappe.
    - Amélioration : Définir des constantes pour les noms des joueurs (`firstPlayer`, `secondPlayer`) et les scores (LOVE, FIFTEEN, THIRTY, FORTY).
    - Justification : Réduit les risques de fautes de frappe et facilite la maintenance du code. De plus cette correction est néscéssaire pour le bon développement de la feature multilingue.

2. **Ajout de la Gestion du Multilingue :**
    - État Actuel : Les chaînes de caractères pour les scores sont en anglais en dur dans le code.
    - Amélioration : Utiliser un fichier de configuration ou un objet pour stocker les chaînes de caractères en différentes langues.
    - Justification : Facilite l'ajout de nouvelles langues et rend l'application plus accessible à un public plus large.

3. **Renommer les Variables :**
    - État Actuel : Les noms de variables comme `m_score1` et `m_score2` ne sont pas descriptifs.
    - Amélioration : Utiliser des noms de variables plus descriptifs tels que `firstPlayerScore` et `secondPlayerScore`.
    - Justification : Améliore la lisibilité et la maintenabilité du code.

4. **Renommer les Méthodes :**
    - État Actuel : Les noms des méthodes sont assez descriptifs mais peuvent être améliorés.
    - Amélioration : Renommer `wonPoint` en `savePoint`.
    - Justification : Améliore la compréhension de la finalité de la méthode.



5. **Refactorisation de la Méthode getScore :**
    - État Actuel : La méthode est trop longue et ne respecte pas le principe de responsabilité unique (Single Responsibility Principle).
    - Amélioration : Diviser getScore en plusieurs méthodes plus petites et plus spécifiques.
    - Justification : Améliore la lisibilité, la maintenabilité et facilite les tests unitaires.

6. **Simplification de la Logique de Score :**
    - État Actuel : Répétition de code dans les blocs if-else.
    - Amélioration : Utiliser des fonctions pour éviter la répétition et rendre le code plus propre.
    - Justification : Réduit la duplication de code et améliore la clarté.
    

### Justification du Choix

## **Assainir le Code avant de Développer la Fonctionnalité Multilingue :**

- Clarté et Maintenabilité : Un code propre et bien organisé est plus facile à comprendre et à modifier.
- Réduction des Risques de Bugs : Le nettoyage du code réduit les risques d'erreurs lors de l'ajout de nouvelles fonctionnalités.
- Facilitation de l'Extension : Un code bien structuré est plus facile à étendre avec de nouvelles fonctionnalités, comme le multilingue.