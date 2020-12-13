
## Instrukcja

**Nie rób forka, bo wtedy inni kandydaci będą widzieć Twoje rozwiązanie :)**

1. sklonuj rozwiązanie 
2. wykonaj zadania
3. wrzuć na swoje repozytorium i prześlij nam link

## Zadania:

### 1. własna implementacja obramowania aktywnego obiektu (dalej - element graficzny)
**Cel: Zmodyfikuj kod w taki sposób aby po zaznaczeniu elementu graficznego obramowanie zmieniło się z domyślnego (A) w następujące (B):**

![](http://nullgravity.eu/github/test_custom_border.png)

Uwaga: obrazek B ma na celu tylko zaprezentowanie ostatecznego wyniku, nie należy sugerowac się proporcjami ani konkretnym wyglądem ikon przy narożnikach (mogą być dowolne).

### 2. Dodaj przycisk UI symulujący menu kontekstowe dla aktywnego obiektu (dalej - element UI)
**Cel: Element UI ma służyć do kontrolowania koloru elementu graficznego. Po wciśnięciu następuje zmiana kolor, może być random.

## wymagania szczegółowe do powyższych zadań:

1. element UI musi być pod kontrolą frameworku React, element graficzny z wykorzystaniem Fabric
2. padding elementu graficznego:
- obramowania 10 px od obiektu,
- ikony na krańcach 10 px od obramowania,
3. ikony elementu graficznego:
- ikona akcji 'rotate' - kółko
- ikona akcji 'resize' - trójkąt wskazujący kierunek resize
4. pozycjonowanie ikon akcji dla elementu graficznego:
- left-top - obracanie obramowanego obiektu zgodnie z ruchem myszki
- right-top - skalowanie obramowanego obiektu (jednocześnie w X i Y) zgodnie z ruchem myszki
- left-bottom - skalowanie obramowanego obiektu (jednocześnie w X i Y) zgodnie z ruchem myszki
- right-bottom - obracanie obramowanego obiektu zgodnie z ruchem myszki
5. domyślna kontrolka dla akcji 'rotate' (wystający na górze kwadracik na obrazku A) jest wyłączona,
6. domyślne kontrolki do rozszerzania (kwadraciki na środku każdego z boków na obrazku A) są wyłączone,
7. element UI może mieć dowolną formę z możliwościa kliknięcia,
8. kliknięcie powoduje modyfikację koloru aktywnego obiektu na canvasie - kolor może być losowy.
9. element graficzny jak i element UI są ze sobą skorelowane tzn. przesunięcie elementu graficznego, powoduje przesunięcie elementu UI o taką samą deltę. 
10. rozwiązanie musi się kompilować oraz uruchamiać w przeglądarce.
11. uruchomiony projekt musi zawierać przynajmniej 5 elementów graficznych, oraz skorelowanych z nimi elementów UI.


## Informacje na temat wykorzystanych frameworków

- React > 16.12
- Fabric > 3.5

## Uruchomienie projektu

1. npm install
2. npm run start
3. [http://localhost:3000](http://localhost:3000).
