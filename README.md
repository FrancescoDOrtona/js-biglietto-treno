# Prezzo biglietto del treno

- Chiedere all'utente i km che vuole percorrere
    - Dichiarare la variabile ed il prompt
- Chiedere all'utente l'età
    - Dichiarare la variabile ed il prompt
- Calcolare il prezzo base del biglietto in base ai km da percorrere (0.21€ a km)
    - Dichiarare la variabile del prezzo base
    - Calcolare il prezzo base del biglietto
- Calcolare il prezzo con lo sconto in base all'età
    - Dichiarare le variabili per i prezzi scontati
    - Calcolare lo sconto del 20% per i minorenni
    - Calcolare lo sconto del 40% per gli over 65
- Stabilire il prezzo nel caso in cui ci sia uno sconto
    - Dichiarare la variabile per il prezzo scontato per i minorenni
    - Dichiarare la variabile per il prezzo scontato per gli over 65
        - SE l'utente è minorenne prezzo base - 20%
        - ALTRIMENTI SE l'utente è over 65 prezzo base -40%
        - ALTRIMENTI prezzo base
- Stampare il prezzo nel dom con 2 cifre dopo la virgola
    - Inserire nell'HTML un tag in cui stampare il prezzo con id = 'prezzo__biglietto'
    - Recuperare con js l'elemento del dom con id = 'prezzo__biglietto'
    - Modificare l'innerHTML del tag con il valore della variabile prezzo biglietto  
    