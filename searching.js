function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                // tr[i].style.color="red";
            } else {
                tr[i].style.display = "none";
                // tr[i].style.background="green";
            }
        }
    }
}
let audioElement = new Audio("song1/1.mp3");
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Desh Mere (Arijit Singh)", coverPath: "cover1/1.jpg", timeEnd1: "03:23"},
    { songName: "Gerua - Dilwale (Arijit Singh)", coverPath: "cover1/2.jpg", timeEnd1: "05:45"},
    { songName: "Janam Janam - Dilwale (Arijit Singh)", coverPath: "cover1/3.jpg", timeEnd1: "03:57"},
    { songName: "Kalank - Title Song (Arijit Singh)", coverPath: "cover1/4.jpg", timeEnd1: "05:11"},
    { songName: "Khairiyat Sad - Chhichhore (Arijit Singh)", coverPath: "cover1/5.jpg", timeEnd1: "04:40"},
    { songName: "Raabta - Title Song (Arijit Singh)", coverPath: "cover1/6.jpg", timeEnd1: "04:57"},
    { songName: "Phir Mohabbat - Murder 2 (Arijit Singh)", coverPath: "cover1/7.jpg", timeEnd1: "05:30"},
    { songName: "Tera Yaar Hoon Main - Sonu Ke Titu Ki Sweety (Arijit Singh)", coverPath: "cover1/8.jpg", timeEnd1: "04:24"},
    { songName: "Tum Hi Ho - Aashiqui 2 (Arijit Singh)", coverPath: "cover1/9.jpg", timeEnd1: "04:22"},
    { songName: "Tum Saath Ho - Tamasha (Arijit Singh)", coverPath: "cover1/10.jpg", timeEnd1: "05:41"},
    { songName: "Beetein Lamhe (KK)", coverPath: "cover2/1.jpg" },
    { songName: "Jannatein kahan (KK)", coverPath: "cover2/2.jpg" },
    { songName: "Khuda Jaane (KK)", coverPath: "cover2/3.jpg" },
    { songName: "Kya Mujhe Pyaar Hai (KK)", coverPath: "cover2/4.jpg" },
    { songName: "Teri Yaadon Mein (KK)", coverPath: "cover2/5.jpg" },
    { songName: "Tu Hi Meri Shab Hai (KK)", coverPath: "cover2/6.jpg" },
    { songName: "Tu Jo Mila (KK)", coverPath: "cover2/7.jpg" },
    { songName: "Tujhe Sochta Hoon (KK)", coverPath: "cover2/8.jpg" },
    { songName: "Zara Se (KK)", coverPath: "cover2/9.jpg" },
    { songName: "Zindagi Do Pal Ki (KK)", coverPath: "cover2/10.jpg" },
    { songName: "Aaas Paas Khuda – Rahat Fateh Ali Khan All Songs (Rahat Fateh Ali Khan)", coverPath: "cover3/1.jpg"},
    { songName: "Afreen(Reprice) – Rahat Fateh Ali Khan All Songs (Rahat Fateh Ali Khan)", coverPath: "cover3/2.jpg"},
    { songName: "Ajj Dil Chadeya – Rahat Fateh Ali Khan All Songs (Rahat Fateh Ali Khan)", coverPath: "cover3/3.jpg"},
    { songName: "Aye Khuda – Rahat Fateh Ali Khan All Songs (Rahat Fateh Ali Khan)", coverPath: "cover3/4.jpg"},
    { songName: "Bahar(Chill Version) – Rahat Fateh Ali Khan All Songs (Rahat Fateh Ali Khan)", coverPath: "cover3/5.jpg"},
    { songName: "Bol Na Halke Halke – Rahat Fateh Ali Khan All Songs (Rahat Fateh Ali Khan)", coverPath: "cover3/6.jpg"},
    { songName: "Chaahat – Rahat Fateh Ali Khan All Songs (Rahat Fateh Ali Khan)", coverPath: "cover3/7.jpg"},
    { songName: "Dillagi – Rahat Fateh Ali Khan All Songs (Rahat Fateh Ali Khan)", coverPath: "cover3/8.jpg"},
    { songName: "Isq Risk – Rahat Fateh Ali Khan All Zongs (Rahat Fateh Ali Khan)", coverPath: "cover3/9.jpg"},
    { songName: "Tera Deedar Hua – Rahat fateh Ali Khan (Rahat Fateh Ali Khan)", coverPath: "cover3/10.jpg"},
    { songName: "Main Hoon Na – Main Hoon Na (Sonu)", coverPath: "cover4/1.jpg"},
    { songName: "Tumse Milke Dilka Jo Haal (Sonu)", coverPath: "cover4/2.jpg"},
    { songName: "Yeh Dil Deewana - Pardes (Sonu)", coverPath: "cover4/3.jpg"},
    { songName: "Abhi Mujh Main Kahin - Agneepath(Sonu)", coverPath: "cover4/4.jpg"},
    { songName: "Sandeshe Aate Hain – Border (Sonu)", coverPath: "cover4/5.jpg"},
    { songName: "O Sahiba O Sahiba – Dil HAI Tumhara (Sonu)", coverPath: "cover4/6.jpg"},
    { songName: "Kaal Ho Na Ho – Kal Ho Na Ho (Sonu)", coverPath: "cover4/7.jpg"},
    { songName: "Suraj Hua Maddham – Kabhi Khusi Kabhi Gham (Sonu)", coverPath: "cover4/8.jpg"},
    { songName: "Main Agar Kahoon – Om Santi Om (Sonu)", coverPath: "cover4/9.jpg"},
    { songName: "Do Pal Ruka – Veer Zaara (Sonu)", coverPath: "cover4/10.jpg"},
    { songName: "Chalao Na Naino Se – Bol Bachchan (Shreya)", coverPath: "cover5/1.jpg"},
    { songName: "Gaaye Ja - Brothers (Shreya)", coverPath: "cover5/2.jpg"},
    { songName: "Abhi Nahi Jaana – Chor Mandli (Shreya)", coverPath: "cover5/3.jpg"},
    { songName: "Bolo Na Tum Jara – Fight Club (Shreya)", coverPath: "cover5/4.jpg"},
    { songName: "Main Chali – Force (Shreya)", coverPath: "cover5/5.jpg"},
    { songName: "Thodi Tumse Sararat – Girlfriend (Shreya)", coverPath: "cover5/6.jpg"},
    { songName: "Do Lafzon Ki – I M 24 (Shreya)", coverPath: "cover5/7.jpg"},
    { songName: "Balma – Khiladi 786 (Shreya)", coverPath: "cover5/8.jpg"},
    { songName: "Krishna Leaving Vrindavan – Krishna Aur Kans (Shreya)", coverPath: "cover5/9.jpg"},
    { songName: "Dheere Dheere – With Love Tumhara (Shreya)", coverPath: "cover5/10.jpg"},
    { songName: "Humko Tumse Ho Gya Hai Pyaar – Amar Akbar Antony (Kishore Kumar)", coverPath: "cover6/1.jpg"},
    { songName: "Tere Bina Zindagi Se - Aandhi (Kishore Kumar)", coverPath: "cover6/2.jpg"},
    { songName: "Zindagi Ek Safar Hai - Andaz (Kishore Kumar)", coverPath: "cover6/3.jpg"},
    { songName: "Keh Doon Tumhe Ya Chup Rahun – Deewar (Kishore Kumar)", coverPath: "cover6/4.jpg"},
    { songName: "Tujh Sang Preet Lagai Sajna – Kaamchor (Kishore Kumar)", coverPath: "cover6/5.jpg"},
    { songName: "Neele Neele Ambar Paar - Kalakaar (Kishore Kumar)", coverPath: "cover6/6.jpg"},
    { songName: "O Mere Dil Chain – Mere Jeevan Sathi (Kishore Kumar)", coverPath: "cover6/7.jpg"},
    { songName: "Paedesia Yeh Sach Hai Piya – Mr Natwarlal (Kishore Kumar)", coverPath: "cover6/8.jpg"},
    { songName: "Dekha Ek Khwab To - Silsila (Kishore Kumar)", coverPath: "cover6/9.jpg"},
    { songName:  "Tu Tu Hey Wohi – Yeh Vaada Raha(Kishore Kumar)", coverPath: "cover6/10.jpg"},
    { songName: "Desh Mere (Mohammad Rafi)", coverPath: "cover7/1.jpg"},
    { songName: "Gerua - Dilwale (Mohammad Rafi)", coverPath: "cover7/2.jpg"},
    { songName: "Janam Janam - Dilwale (Mohammad Rafi)", coverPath: "cover7/3.jpg"},
    { songName: "Kalank - Title Song(Mohammad Rafi)", coverPath: "cover7/4.jpg"},
    { songName: "Khairiyat Sad – Chhichhore(Mohammad Rafi)", coverPath: "cover7/5.jpg"},
    { songName: "Raabta - Title Song (Mohammad Rafi)", coverPath: "cover7/6.jpg"},
    { songName: "Phir Mohabbat - Murder 2(Mohammad Rafi)", coverPath: "cover7/7.jpg"},
    { songName: "Tera Yaar Hoon Main - Sonu Ke Titu Ki Sweety(Mohammad Rafi)", coverPath: "cover7/8.jpg"},
    { songName: "Tum Hi Ho - Aashiqui 2 (Mohammad Rafi)", coverPath: "cover7/9.jpg"},
    { songName: "Tum Saath Ho - Tamasha (Mohammad Rafi)", coverPath: "cover7/10.jpg"},
    { songName: "Dil Toh Pagal Hain – Dil Toh Pagal Hain (Lata)", coverPath: "cover8/1.jpg"},
    { songName: "Janam Janam Ke Saath – Bheegi Palkein(Lata)", coverPath: "cover8/2.jpg"},
    { songName: "Tere Bina Zindagi Se - Aandhi (Lata)", coverPath: "cover8/3.jpg"},
    { songName: "Bheegi Bheegi Raaton Mein - Ajnabee(Lata)", coverPath: "cover8/4.jpg"},
    { songName: "Kora Kagaz Tha Yeh Man Mera - Aradhana(Lata)", coverPath: "cover8/5.jpg"},
    { songName: "Agar Tum Na Hote – Collection Of Lata(Lata)", coverPath: "cover8/6.jpg"},
    { songName: "Tujh Snag Preet Lagai Sanjna - Kaamchor(Lata)", coverPath: "cover8/7.jpg"},
    { songName: "Dil Pardeshi Ho Gaya – Kachche Dhaage(Lata)", coverPath: "cover8/8.jpg"},
    { songName: "Laag Ja Gaale Se – Who Kaun Thi (Lata)", coverPath: "cover8/9.jpg"},
    { songName: "Pardesia Yeh Sach Hai – Mr Natwarlaal (Lata)", coverPath: "cover8/10.jpg"},
    { songName: "Abhi Na Jao – Hum Dono (Asha)", coverPath: "cover9/1.jpg"},
    { songName: "O Mere Raja – Johny Mere Naam (Asha)", coverPath: "cover9/2.jpg"},
    { songName: "Aap Yaha Aaye Kis Liye – Kal Aaj Aur Kaal (Asha)", coverPath: "cover9/3.jpg"},
    { songName: "Radha Kaise Na Jaale – Lagan (Asha)", coverPath: "cover9/4.jpg"},
    { songName: "Pyaar Humara Amar Rahega - Muddat(Asha)", coverPath: "cover9/5.jpg"},
    { songName: "Chhod Do Aanchal – Paying Guest (Asha)", coverPath: "cover9/6.jpg"},
    { songName: "Kya Dekhte Ho - Qurbani(Asha)", coverPath: "cover9/7.jpg"},
    { songName: "Rangeela Re - Rangeela(Asha)", coverPath: "cover9/8.jpg"},
    { songName: "Pyaar Karne Waale - Shaan (Asha)", coverPath: "cover9/9.jpg"},
    { songName: "Do Lafzon Ki Hain Dil Ki – The Great Gambler (Asha)", coverPath: "cover9/10.jpg"},
    { songName: "Char Dealer Modhya – Bengali Hits Of Manna Dey (Manna Dey)", coverPath: "cover10/1.jpg"},
    { songName: "Dekhi Oi Hashir Jhilik  - Bengali Hits Of Manna Dey (Manna Dey)", coverPath: "cover10/2.jpg"},
    { songName: "E To Rag Noi – Bengali Hits Of Manna Dey (Manna Dey)", coverPath: "cover10/3.jpg"},
    { songName: "Ei Kule Ami – Bengali Hits Of Manna Dey (Manna Dey)", coverPath: "cover10/4.jpg"},
    { songName: "Eki Ange Eto Rup – Bengali Hiys Of Mnna Dey (Manna Dey)", coverPath: "cover10/5.jpg"},
    { songName: "Ke Tumi Tandrahoroni  - Bengali Hits Of Manna Dey (Manna Dey)", coverPath: "cover10/6.jpg"},
    { songName: "Kothai Kothai Je Raat Hoye Jaaye – Bengali Hits Of Manna Dey(Manna Dey)", coverPath: "cover10/7.jpg"},
    { songName: "O Amar Mon Jamunar – Bengali Hits Of Manna Dey (Manna Dey)", coverPath: "cover10/8.jpg"},
    { songName: "Pousher Kachhakachhi  - Bengali Hits Of Manna Dey (Manna Dey)", coverPath: "cover10/9.jpg"},
    { songName: "Teer Bhanga Dheu – Bengali Hits Of Manna Dey (Manna Dey)", coverPath: "cover10/10.jpg"},
]
songItem.forEach((element, i) => {
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})