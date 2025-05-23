import React, { createContext } from 'react';
import cricket from '../assets/cricket.svg';
import football from '../assets/football.svg';
import basketball from '../assets/basketball.svg';
import volleyball from '../assets/volleyball.svg';
import lawnTennis from '../assets/lawn_tennis.svg';
import badminton from '../assets/badminton.svg';
import tableTennis from '../assets/table_tennis.svg';
import chess from '../assets/chess.svg';
import athletics from '../assets/athletics.svg';
import hockey from '../assets/hockey.svg';
import squash from '../assets/squash.svg';
import aquatics from '../assets/aquatics.svg';
import weightlifting from '../assets/weightlifting.svg';
import userReviews from './userReviews.json';
import events from './events.json'


//Hostel Sports Secretaries Images
import jwalamukhi_secretary from '../assets/secretaries/jwalamukhi.png';
import girnar_secretary from '../assets/secretaries/girnar.png';
import aravali_secretary from '../assets/secretaries/aravali.png';
import kailash_secretary from '../assets/secretaries/kailash.png';
import satpura_secretary from '../assets/secretaries/satpura.png';
import shivalik_secretary from '../assets/secretaries/shivalik.png';
import udaigiri_secretary from '../assets/secretaries/udaigiri.png';
import zanskar_secretary from '../assets/secretaries/zanskar.png';
import kumaon_secretary from '../assets/secretaries/kumaon.png';
import nalanda_secretary from '../assets/secretaries/nalanda.png';
import sahyadri_secretary from '../assets/secretaries/sahyadri.png';
import dronagiri_secretary from '../assets/secretaries/dronagiri.png';
import saptagiri_secretary from '../assets/secretaries/saptagiri.png';
// import nilgiri_secretary from '../assets/secretaries/nilgiri.png';
import vindhyachal_secretary from '../assets/secretaries/vindhyachal.png';
// import kara_secretary from '../assets/secretaries/kara.png';
// import himadri_secretary from '../assets/secretaries/himadri.png';





//Team Members Images
//Athletics
import sanha from '../assets/teams/athletics/sanha_sigger.png';
import metla from '../assets/teams/athletics/metla_reshma.png';
import puneet from '../assets/teams/athletics/puneet.png';
import anjit from '../assets/teams/athletics/anjit_basumatary.png';
  //members
  import Robinson_Karangala from '../assets/teams/athletics/Robinson_Karangala.png';
  import Sanjay_Lohar from '../assets/teams/athletics/Sanjay_Lohar.png';
  import Aashutosh from '../assets/teams/athletics/Aashutosh.png';
  import Kavya_Kumar from '../assets/teams/athletics/Kavya_Kumar.png';
  import Ravi_Charan from '../assets/teams/athletics/Ravi_Charan.png';
  //women
  import Ananya_Yadav from '../assets/teams/athletics/women/Ananya_Yadav.png';
  import Kanta_Meena from '../assets/teams/athletics/women/Kanta_Meena.png';
  import Kriti_Sharma from '../assets/teams/athletics/women/Kriti_Sharma.png';
  import Manya_Kansal from '../assets/teams/athletics/women/Manya_Kansal.png';
  import Nanita_Basumatary from '../assets/teams/athletics/women/Nanita_Basumatary.png';
  import Pooja_H_M from '../assets/teams/athletics/women/Pooja_H_M.png';
  import Sita_Bissu from '../assets/teams/athletics/women/Sita_Bissu.png';
  //men
  import Ashish_Kumar_Dhillon from '../assets/teams/athletics/men/Ashish_Kumar_Dhillon.png';
  import Daksh from '../assets/teams/athletics/men/Daksh.png';
import Gaurav from '../assets/teams/athletics/men/Gaurav.png';
import Kushal from '../assets/teams/athletics/men/Kushal.png';
import Mohan from '../assets/teams/athletics/men/Mohan.png';
import Priyanshu_Pal from '../assets/teams/athletics/men/Priyanshu_Pal.png';
import Rohan from '../assets/teams/athletics/men/Rohan.png';
import T_Sivaramakrishna_Reddy from '../assets/teams/athletics/men/T_Sivaramakrishna_Reddy.png';
import Tushar_Sharma from '../assets/teams/athletics/men/Tushar_Sharma.png';
import Vansh_Saini from '../assets/teams/athletics/men/Vansh_Saini.png';




//Aquatics
import saksham from '../assets/teams/aquatics/saksham_paliwal.png';
import suchir from '../assets/teams/aquatics/suchir_kohli.png';
import rutuja from '../assets/teams/aquatics/rutuja_shelke.png';
import isha from '../assets/teams/aquatics/isha_agrawal.png';
import Rishita_Shukla from '../assets/teams/aquatics/Rishita_Shukla.png';

//Football
import sneha from '../assets/teams/football/sneha_dhaka.png';
import shweta from '../assets/teams/football/shweta_tiwari.png'
import mayank from '../assets/teams/football/mayank_arya.png';
import krish from '../assets/teams/football/krish_goswami.png';
  //men
  import Anirudh_Srinivas from '../assets/teams/football/men/Anirudh_Srinivas.png';
  import Arjun_Sharma from '../assets/teams/football/men/Arjun_Sharma.png';
  import Arun_Kumar from '../assets/teams/football/men/Arun_Kumar.png';
  import Ashutosh from '../assets/teams/football/men/Ashutosh.png';
  import Deepak_Meena from '../assets/teams/football/men/Deepak_Meena.png';
  import Dhruv_Singh from '../assets/teams/football/men/Dhruv_Singh.png';
  import Mayank_Arya from '../assets/teams/football/men/Mayank_Arya.png';
  import Pritish_Mitra from '../assets/teams/football/men/Pritish_Mitra.png';
  import Rithik_Rajendran from '../assets/teams/football/men/Rithik_Rajendran.png';
  import Samarth_Singla from '../assets/teams/football/men/Samarth_Singla.png';
  import Siddhant_Vernekar from '../assets/teams/football/men/Siddhant_Vernekar.png';
  import Sriram from '../assets/teams/football/men/Sriram.png'; 
  import Tanmay_Jhalani from '../assets/teams/football/men/Tanmay_Jhalani.png';
  import Vaibhav_Singh from '../assets/teams/football/men/Vaibhav_Singh.png';
  import Yash_Bafna from '../assets/teams/football/men/Yash_Bafna.png';
  import Yengkhom_Barnibash_Singh from '../assets/teams/football/men/Yengkhom_Barnibash_Singh.png';
  import yug_dev_chauhan from '../assets/teams/football/men/yug_dev_chauhan.png';
  


//Hockey
import bhavesh from '../assets/teams/hockey/bhavesh_bhojwal.png';
import khemraj from '../assets/teams/hockey/khemraj_newar.png';

//members
import devansh_pratap_singh from '../assets/teams/hockey/Devansh_pratap_singh.png';
import Gajendra_Meena from '../assets/teams/hockey/Gajendra_Meena.png';
import Harshit_Chaudhary from '../assets/teams/hockey/Harshit_Chaudhary.png';
import Manish_Kumar from '../assets/teams/hockey/Manish_Kumar.png';
import Narendra_Nath_Sharma from '../assets/teams/hockey/Narendra_Nath_Sharma.png';
import Srijan_Gupta from '../assets/teams/hockey/Srijan_Gupta.png';

//men
import Abhishek_Singh_Dangi from '../assets/teams/hockey/men/Abhishek_Singh_Dangi.png';
import Gaurav_Raju_Shende from '../assets/teams/hockey/men/Gaurav_Raju_Shende.png';
import Jagveer_Meena from '../assets/teams/hockey/men/Jagveer_Meena.png';
import Mohit_Kumar_Gautam from '../assets/teams/hockey/men/Mohit_Kumar_Gautam.png';
import Ravindra_Khoja from '../assets/teams/hockey/men/Ravindra_Khoja.png';
import Vishesh from '../assets/teams/hockey/men/Vishesh.png';


//Squash
import piyush from '../assets/teams/squash/piyush_dahiya.png';
import anishka from '../assets/teams/squash/anishka_prajapati.png';
import pranjal from '../assets/teams/squash/pranjal_awasthi.png';
import ayush from '../assets/teams/squash/ayush_yadav.png';
  //members
  import Sarthak_singh from '../assets/teams/squash/Sarthak_Singh.png';
  import Antriksh_Saran from '../assets/teams/squash/Antriksh_Saran.png';
  import Ananya_Singh from '../assets/teams/squash/Ananya_Singh.png';
  import Urvi from '../assets/teams/squash/Urvi.png';


//Basketball
import tannu from '../assets/teams/basketball/tannu_shree.png';
import satwik from '../assets/teams/basketball/satwik_kumar.png';
import riddhi from '../assets/teams/basketball/riddhi_agrawal.png';

//members
import Armaan_vaid from '../assets/teams/basketball/Armaan_Vaid.png';
import Dharana_Sehgal from '../assets/teams/basketball/Dharana_Sehgal.png';
import Harsh_Agarwal from '../assets/teams/basketball/Harsh_Agarwal.png';
import Kashvi from '../assets/teams/basketball/Kashvi.png';
import Pinaki from '../assets/teams/basketball/Pinaki.png';
import Prashanthi_Jothi from '../assets/teams/basketball/Prashanthi_Jothi.png';
import Aditya_Bansal from '../assets/teams/basketball/Aditya_Bansal.png';
import Smriti_Sehrawat from '../assets/teams/basketball/Smriti_Sehrawat.png';
import Tatsam_Ranjan_Sharma from '../assets/teams/basketball/Tatsam_Ranjan_Sharma.png';
import Vartika from '../assets/teams/basketball/Vartika.png';

//women
import Akanksha_Singh from '../assets/teams/basketball/women/Akanksha_Singh.png';
import Divya from '../assets/teams/basketball/women/Divya.png';
import Lipie_Sinha from '../assets/teams/basketball/women/Lipie_Sinha.png';
import Nandani from '../assets/teams/basketball/women/Nandani.png';
import Shreshtha from '../assets/teams/basketball/women/Shreshtha.png';
import Yukti_Yadav from '../assets/teams/basketball/women/Yukti_Yadav.png';

//men
import Atharv_Saxena from '../assets/teams/basketball/men/Atharv_Saxena.png';
import Bhavishya_K_Singh from '../assets/teams/basketball/men/Bhavishya_K_Singh.png';
import Dushyant_Soni from '../assets/teams/basketball/men/Dushyant_Soni.png';
import Saksham_Paliwal from '../assets/teams/basketball/men/Saksham_Paliwal.png';
import Vasu_Singh from '../assets/teams/basketball/men/Vasu_Singh.png';
import Venkat_Aravind_Bose_Vanthala from '../assets/teams/basketball/men/Venkat_Aravind_Bose_Vanthala.png';




  //Chess
  import shourya from '../assets/teams/chess/shourya_vir_jain.png';
import shoan from '../assets/teams/chess/shoan_raj.png';
  //members
  import soham_sameer_palkar from '../assets/teams/chess/Soham_Sameer_Palkar.png';
  import Shamil_Mohammed from '../assets/teams/chess/Shamil_Mohammed.png';
  import Raghav_Singla from '../assets/teams/chess/Raghav_Singla.png';
  import Sumit_Biswal from '../assets/teams/chess/Sumit_Biswal.png';

//Cricket
import talin from '../assets/teams/cricket/talin_sharma.png';
import aniket from '../assets/teams/cricket/aniket_tripathi.png';
//members
import Rishit_Ojha from '../assets/teams/cricket/Rishit_Ojha.png';
import Lavkush_Verma from '../assets/teams/cricket/Lavkush_Verma.png';
import Madhav_Biyani from '../assets/teams/cricket/Madhav_Biyani.png';
import Nishant_Kumar_Meena from '../assets/teams/cricket/Nishant_Kumar_Meena.png';
import Harsh_Jain from '../assets/teams/cricket/Harsh_Jain.png';
//men
import Abhishek_Shukla from '../assets/teams/cricket/men/Abhishek_Shukla.png';
import Aman_Nohwal from '../assets/teams/cricket/men/Aman_Nohwal.png';
import Daksh_Davas from '../assets/teams/cricket/men/Daksh_Davas.png';
import Garvit_Verma from '../assets/teams/cricket/men/Garvit_Verma.png';
import Ilyas_Mir from '../assets/teams/cricket/men/Ilyas_Mir.png';
import Kanish_Khatana from '../assets/teams/cricket/men/Kanish_Khatana.png';
import Utkarsh_Singh from '../assets/teams/cricket/men/Utkarsh_Singh.png';


//Table Tennis
import vaishali from '../assets/teams/table_tennis/vaishali_anand.png';
import dhruv from '../assets/teams/table_tennis/dhruv_jain.png';
import ayush_dudawat from '../assets/teams/table_tennis/ayush_dudawat.png';
  //members
  import Akash from '../assets/teams/table_tennis/Akash.png';
  import Danish_Jhanji from '../assets/teams/table_tennis/Danish_Jhanji.png';
  import Arnav_Garg from '../assets/teams/table_tennis/Arnav_Garg.png';
  import Divija_Motwani from '../assets/teams/table_tennis/Divija_Motwani.png';
  import Sidh_Bansal from '../assets/teams/table_tennis/Sidh_Bansal.png';

//Tennis 
import shreyash from '../assets/teams/tennis/shreyash_kumar.png';
import namish from '../assets/teams/tennis/namish_mittal.png';
  //members
  import Chappa_Sri_Vinay from '../assets/teams/tennis/Chappa_Sri_Vinay.png';
  import Faiq_Ahmed from '../assets/teams/tennis/Faiq_Ahmed.png';
  import Smart_Yadav from '../assets/teams/tennis/Smart_Yadav.png';
  import Vaibhav_krishna_sriram from '../assets/teams/tennis/Vaibhav_Krishna_Sriram.png';
  import Tushita from '../assets/teams/tennis/Tushita.png';
  import Tara_Dhondiyal from '../assets/teams/tennis/Tara_Dhondiyal.png';
  // import Ananya_Singh from '../assets/teams/tennis/Ananya Singh.png';

//Volleyball
import rajveer from '../assets/teams/volleyball/rajveer_saini.png';
import vivek from '../assets/teams/volleyball/vivek_mori.png';

//members
import shyamali from '../assets/teams/volleyball/Shyamali.png';
import Pallavi from '../assets/teams/volleyball/Pallavi.png';
import Bhavana from '../assets/teams/volleyball/Bhavana.png';
import Gurseerat from '../assets/teams/volleyball/Gurseerat.png';
import Lovey from '../assets/teams/volleyball/Lovey.png';
import Alka from '../assets/teams/volleyball/Alka.png';
import Priti from '../assets/teams/volleyball/Priti.png';
import Priya from '../assets/teams/volleyball/Priya.png';

//women
import Khushi_Yadav from '../assets/teams/volleyball/women/Khushi_Yadav.png';
import Sanskriti_Jain from '../assets/teams/volleyball/women/Sanskriti_Jain.png';
import Taniska_Choudhary from '../assets/teams/volleyball/women/Taniska_Choudhary.png';
import Vaishnavi from '../assets/teams/volleyball/women/Vaishnavi.png';

//men
import Ankit from '../assets/teams/volleyball/men/Ankit.png';
import Dheeraj_Kumar from '../assets/teams/volleyball/men/Dheeraj_Kumar.png';
import Gaurav_Kumar from '../assets/teams/volleyball/men/Gaurav_Kumar.png';
import Himanshu from '../assets/teams/volleyball/men/Himanshu.png';
import Ishan from '../assets/teams/volleyball/men/Ishan.png';
import Shiven_Rathore from '../assets/teams/volleyball/men/Shiven_Rathore.png';
import Sudheer from '../assets/teams/volleyball/men/Sudheer.png';
import Surendra from '../assets/teams/volleyball/men/Surendra.png';
import Yuvraj_Singh from '../assets/teams/volleyball/men/Yuvraj_Singh.png';

  


//Weightlifting
import bhanu from '../assets/teams/weightlifting/bhanu_pratap_singh.png';
import Abhinav_Pal from '../assets/teams/weightlifting/Abhinav_Pal.png';
import Haneesh_Bhagat from '../assets/teams/weightlifting/Haneesh_Bhagat.png';
import Yuvraj_Dawar from '../assets/teams/weightlifting/Yuvraj_Dawar.png';
import Hari_Om from '../assets/teams/weightlifting/Hari_Om.png'


//badminton
import meghana from '../assets/teams/badminton/meghana_halder.png';
  //members
  import Prakkhyaat_Prajaapat from '../assets/teams/badminton/Prakkhyaat_Prajaapat.png';
  import Ruchika from '../assets/teams/badminton/Ruchika.png';
  import Krithik_Eeswar from '../assets/teams/badminton/Krithik_Eeswar.png';
  import Vinayak from '../assets/teams/badminton/Vinayak.png';
  import Saumya_Tayal from '../assets/teams/badminton/Saumya_Tayal.png';
  import Aditya_Yadav from '../assets/teams/badminton/Aditya_Yadav.png';
  import Shiwang_Gupta from '../assets/teams/badminton/Shiwang_Gupta.png';

import { image } from 'framer-motion/client';

export const dataContext = createContext();

const Data = ({ children }) => {
  const sports = {
    cricket: { img: cricket, name: 'Cricket' },
    football: { img: football, name: 'Football' },
    basketball: { img: basketball, name: 'Basketball' },
    volleyball: { img: volleyball, name: 'Volleyball' },
    lawnTennis: { img: lawnTennis, name: 'Lawn Tennis' },
    badminton: { img: badminton, name: 'Badminton' },
    tableTennis: { img: tableTennis, name: 'Table Tennis' },
    chess: { img: chess, name: 'Chess' },
    athletics: { img: athletics, name: 'Athletics' },
    hockey: { img: hockey, name: 'Hockey' },
    squash: { img: squash, name: 'Squash' },
    aquatics: { img: aquatics, name: 'Aquatics' },
    weightlifting: { img: weightlifting, name: 'Weightlifting' },
  };

  // const userReviews = [
  //     {
  //       name: 'Jon Snow',
  //       designation: 'King in the North',
  //       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
  //       social :{
  //           twitter: 'https://twitter.com',
  //           facebook: 'https://facebook.com',
  //           linkedin: 'https://linkedin.com'
  //       },
  //       rating: 2
  //   },
  //   {
  //       name: 'Daenerys Targaryen',
  //       designation: 'Mother of Dragons',
  //       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
  //       social :{
  //         twitter: 'https://twitter.com',
  //         facebook: 'https://facebook.com',
  //         linkedin: 'https://linkedin.com'
  //     },
  //       rating: 3
  //   },
  //   {
  //       name: 'Tyrion Lannister',
  //       designation: 'Hand of the King',
  //       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
  //       social :{
  //         twitter: 'https://twitter.com',
  //         facebook: 'https://facebook.com',
  //         linkedin: 'https://linkedin.com'
  //     },
  //       rating: 4
  //   },
  //   {
  //       name: 'Cersei Lannister',
  //       designation: 'Queen of the Seven Kingdoms',
  //       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
  //       social :{
  //         twitter: 'https://twitter.com',
  //         facebook: 'https://facebook.com',
  //         linkedin: 'https://linkedin.com'
  //     },
  //       rating: 5
  //   },
  // ];

  const sportsData = {
    basketball: {
      name: "Basketball",
      description: "Basketball is a popular sport played on a rectangular court where two teams of five players each try to score by shooting a ball through the opposing team’s hoop.",
      team: {
        men: {
          leaders: [
            { name: "Stawik Kumar",
              post : "Captain",
              image: satwik,
             },
            { name: "Atharva Revankar",
              post: "Vice Captain",
              image: image,

             },
          ],
          members: [
            { name: "Armaan Vaid",
              image: Armaan_vaid
             },
             { name: "Harsh Agarwal", image: Harsh_Agarwal },
             { name: "Pinaki", image: Pinaki },
             { name: "Aditya Bansal", image: Aditya_Bansal },
             { name: "Tatsam Ranjan Sharma", image: Tatsam_Ranjan_Sharma },
             { name: "Saksham Paliwal", image: Saksham_Paliwal },
             {name: "Atharv Saxena", image: Atharv_Saxena},
             {name: "Dushyant Soni", image: Dushyant_Soni},
             {name: "Vasu Singh", image: Vasu_Singh},
             {name: "Venkat Aravind Bose Vanthala", image: Venkat_Aravind_Bose_Vanthala},
             {name: "Bhavishya K Singh", Bhavishya_K_Singh},
          ]
        },
        women: {
          leaders: [
            { name: "Riddhi Agrawal",
              post: "Captain",
              image: riddhi,
             },
            { name: "Tannu Shree",
              post: "Vice Captain",
              image: tannu,
             },
          ],
          members: [
            { name: "Dharana Sehgal",
              image: Dharana_Sehgal,
             },
             { name: "Kashvi", image: Kashvi },
            { name: "Vartika", image: Vartika },
            { name: "Smriti Sehrawat", image: Smriti_Sehrawat },
            { name: "Prashanthi Jothi", image: Prashanthi_Jothi },
            {name: "Akanksha Singh", image: Akanksha_Singh },
            { name: "Divya", image: Divya },
            { name: "Lipie Sinha", image: Lipie_Sinha },
            { name: "Nandani", image: Nandani },
            { name: "Shreshtha", image: Shreshtha },
            { name: "Yukti Yadav", image: Yukti_Yadav },
          ]
        }
      }
    },
    cricket: {
      name: "Cricket",
      description: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard pitch.",
      team: {
        men: {
          leaders: [
            { name: "Aniket",
              post: "Captain",
              image: aniket,
             },
            { name: "Talin Sharma",
              post: "Vice Captain",
              image: talin,
             },
          ],
          members: [
            { name: "Rishit Ojha",
              image: Rishit_Ojha,
             },
             { name: "Lavkush Verma", image: Lavkush_Verma },
            { name: "Madhav Biyani", image: Madhav_Biyani },
            { name: "Nishant Kumar Meena", image: Nishant_Kumar_Meena },
            { name: "Harsh Jain", image: Harsh_Jain },
            {name: "Abhishek", image: Abhishek_Shukla },
            {name: "Aman Nohwal", image: Aman_Nohwal},
            {name: "Daksh Davas", image: Daksh_Davas},
            {name: "Garvit Verma", image : Garvit_Verma},
            { name: "Ilyas Mir", image: Ilyas_Mir },
            { name: "Kanish Khatana", image: Kanish_Khatana },
            { name: "Utkarsh Singh", image: Utkarsh_Singh },
           
          ]
        },
        women: {
          leaders: [
           
          ],
          members: [
          ]
        }
      }
    },
    football: {
      name: "Football",
      description: "Football is a team sport played between two teams of eleven players with a spherical ball. It is the most popular sport in the world.",
      team: {
        men: {
          leaders: [
            { name: "Mayank Arya",
              post: "Captain",
              image: mayank,
             },
            { name: "Krish Goswami",
              post: "Vice Captain",
              image: krish,
             },
          ],
          members: [
            { name: "Anirudh Srinivas", image: Anirudh_Srinivas },
            {name: "Arjun Sharma", image: Arjun_Sharma },
            { name: "Arun Kumar", image: Arun_Kumar },
            { name: "Ashutosh", image: Ashutosh },
            { name: "Deepak Meena", image: Deepak_Meena },
            { name: "Dhruv Singh", image: Dhruv_Singh },
            { name: "Mayank Arya", image: Mayank_Arya },
            { name: "Pritish Mitra", image: Pritish_Mitra },
            { name: "Rithik Rajendran", image: Rithik_Rajendran },
            { name: "Samarth Singla", image: Samarth_Singla },
            { name: "Siddhant Vernekar", image: Siddhant_Vernekar },
            { name: "Sriram", image: Sriram },
            { name: "Tanmay Jhalani", image: Tanmay_Jhalani },
            { name: "Vaibhav Singh", image: Vaibhav_Singh },
            { name: "Yash Bafna", image: Yash_Bafna },
            { name: "Yengkhom Barnibash Singh", image: Yengkhom_Barnibash_Singh },
            { name: "Yug Dev Chauhan", image: yug_dev_chauhan },

          ]
        },
        women: {
          leaders: [
            { name: "Sneha Dhaka",
              post: "Captain",
              image: sneha,
             },
            { name: "Shweta Tiwari",
              post: "Vice Captain",
              image: shweta,
             },
          ],
          members: [
           
          ]
        }
      }
    },
    volleyball: {
      name: "Volleyball",
      description: "Volleyball is a team sport in which two teams of six players are separated by a net. The objective is to score points by grounding the ball on the other team's court.",
      team: {
        men: {
          leaders: [
            { name: "Vivek Mori",
              post: "Captain",
              image: vivek,
             },
            { name: "Rajveer Saini",
              post: "Vice Captain",
              image: rajveer,
             },
          ],
          members: [
            { name: "Ankit",
              image: Ankit,
             },
             { name: "Dheeraj Kumar", image: Dheeraj_Kumar },
             { name: "Gaurav Kumar", image: Gaurav_Kumar },
             { name: "Himanshu", image: Himanshu },
             { name: "Ishan", image: Ishan },
             { name: "Shiven Rathore", image: Shiven_Rathore },
             { name: "Sudheer", image: Sudheer },
             { name: "Surendra", image: Surendra },
             { name: "Yuvraj Singh", image: Yuvraj_Singh },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Shyamali",
              image: shyamali,
            },
            { name: "Pallavi",
              image: Pallavi,
             },
             { name: "Bhavana", image: Bhavana },
             { name: "Gurseerat", image: Gurseerat },
             { name: "Lovey", image: Lovey },
             { name: "Alka", image: Alka },
             { name: "Priti", image: Priti },
             { name: "Priya", image: Priya },
             { name: "Khushi Yadav", image: Khushi_Yadav },
              { name: "Sanskriti Jain", image: Sanskriti_Jain },
              { name: "Taniska Choudhary", image: Taniska_Choudhary },
              { name: "Vaishnavi", image: Vaishnavi },
          ]
        }
      }
    },
    lawnTennis: {
      name: "Lawn Tennis",
      description: "Lawn tennis is a racket sport that can be played individually or in doubles on a grass or hard court, aiming to hit the ball over a net.",
      team: {
        men: {
          leaders: [
            { name: "Namish Mittal",
              post : "Captain",
              image: namish,
             },
            { name: "Shreyash Kumar",
              post: "Vice Captain",
              image: shreyash,
             },
          ],
          members: [
            { name: "Chappa Sri Vinay", image: Chappa_Sri_Vinay },
            { name: "Faiq Ahmed", image: Faiq_Ahmed },
            { name: "Smart Yadav", image: Smart_Yadav },
            { name: "Vaibhav Krishna Sriram", image: Vaibhav_krishna_sriram },
           
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Tushita", image: Tushita },
            { name: "Tara Dhondiyal", image: Tara_Dhondiyal },
            { name: "Ananya Singh" , image: Ananya_Singh},
          ]
        }
      }
    },
    badminton: {
      name: "Badminton",
      description: "Badminton is a racquet sport played using shuttlecocks, where players or teams try to score points by hitting the shuttlecock over a net.",
      team: {
        men: {
          leaders: [
            { name: "Aditya Yadav",post: "Vice Captain", image: Aditya_Yadav },
          ],
          members: [
            { name: "Prakkhyaat Prajaapat",
              image: Prakkhyaat_Prajaapat,
             },
            { name: "Krithik Eeswar", image: Krithik_Eeswar },
            { name: "Vinayak", image: Vinayak },
            { name: "Shiwang Gupta", image: Shiwang_Gupta },
          ]
        },
        women: {
          leaders: [
            { name: "Meghana Halder",
              post: "Captain",
              image: meghana,
             },
          ],
          members: [
            { name: "Ruchika", image: Ruchika },
            { name: "Saumya Tayal", image: Saumya_Tayal },
            // { name: "Aditya Yadav", image: Aditya_Yadav },
          ]
        }
      }
    },
    tableTennis: {
      name: "Table Tennis",
      description: "Table tennis is a sport where two or four players hit a lightweight ball back and forth across a table using small rackets.",
      team: {
        men: {
          leaders: [
            { name: "Ayush Dudawat",
              post: "Captain",
              image: ayush_dudawat,
             },
            { name: "Dhruv Jain",
              post: "Vice Captain",
              image: dhruv,
             },
          ],
          members: [
            { name: "Akash", image: Akash },
            { name: "Danish Jhanji", image: Danish_Jhanji },
            { name: "Arnav Garg", image: Arnav_Garg },
            { name: "Sidh Bansal", image: Sidh_Bansal },
          ]
        },
        women: {
          leaders: [
            { name: "Vaishali Anand",
              post: "Captain",
              image: vaishali,
             },
          ],
          members: [
            { name: "Divija Motwani", image: Divija_Motwani },

          ]
        }
      }
    },
    chess: {
      name: "Chess",
      description: "Chess is a two-player strategy game played on a checkered board, where each player moves their pieces to capture the opponent's king.",
      team: {
        men: {
          leaders: [
            { name: "Shourya Vir Jain",
              post : "Captain",
              image: shourya
             },
            { name: "Shoan Raj",
              post: "Vice Captain",
              image: shoan
             },
          ],
          members: [
            { name: "Soham Sameer Palkar",
              image: soham_sameer_palkar
             },
             { name: "Shamil Mohammed", image: Shamil_Mohammed },
            { name: "Raghav Singla", image: Raghav_Singla },
            { name: "Sumit Biswal", image: Sumit_Biswal },
          ]
        },
        women: {
          leaders: [
          ],
          members: [

          ]
        }
      }
    },
    athletics: {
      name: "Athletics",
      description: "Athletics is a collection of sports that involve competitive running, jumping, throwing, and walking.",
      team: {
        men: {
          leaders: [
            { name: "Puneet",
              post: "Captain",
              image: puneet,
             },
            { name: "Anjit Basumatary",
              post: "Vice Captain",
              image : anjit
             },
          ],
          members: [
            { name: "Robinson Karangala",
              image: Robinson_Karangala,
             },
             { name: "Sanjay Lohar", image: Sanjay_Lohar },
            { name: "Aashutosh", image: Aashutosh },
            { name: "Kavya Kumar", image: Kavya_Kumar },
            { name: "Ravi Charan", image: Ravi_Charan },
            {name: "Ashish Kumar", image: Ashish_Kumar_Dhillon },
            { name: "Daksh", image: Daksh },
            { name: "Gaurav", image: Gaurav },
            { name: "Kushal", image: Kushal },
            { name: "Mohan", image: Mohan },
            { name: "Priyanshu Pal", image: Priyanshu_Pal },
            { name: "Rohan", image: Rohan },
            { name: "T. Sivaramakrishna Reddy", image: T_Sivaramakrishna_Reddy },
            { name: "Tushar Sharma", image: Tushar_Sharma },
            { name: "Vansh Saini", image: Vansh_Saini }

          ]
        },
        women: {
          leaders: [
            { name: "Sanha Sigger",
              post: "Captain",
              image: sanha,
            },
            { name: "Metla Reshma",
              post: "Vice Captain",
              image: metla,
            },
          ],
          members: [
            { name: "Ananya Yadav", image: Ananya_Yadav },
            { name: "Kanta Meena", image: Kanta_Meena },
            { name: "Kriti Sharma", image: Kriti_Sharma },
            { name: "Manya Kansal", image: Manya_Kansal },
            { name: "Nanita Basumatary", image: Nanita_Basumatary },
            { name: "Pooja H M", image: Pooja_H_M },
            { name: "Sita Bissu", image: Sita_Bissu },
          ]
        }
      }
    },
  hockey: {
    name: "Hockey",
    description: "Hockey is a team sport where players use a stick to hit a ball or puck to score goals against the opposing team.",
    team: {
      men: {
        leaders: [
          { name: "Bhavesh Bhojwal",
            post: "Captain",
            image: bhavesh,
           },
          { name: "Khemraj Newar",
            post: "Vice Captain",
            image: khemraj,
           },
        ],
        members: [
          { name: "Devansh Pratap Singh",
            image: devansh_pratap_singh,
           },
           { name: "Gajendra Meena", image: Gajendra_Meena },
           { name: "Harshit Chaudhary", image: Harshit_Chaudhary },
           { name: "Manish Kumar", image: Manish_Kumar },
           { name: "Narendra Nath Sharma", image: Narendra_Nath_Sharma },
           { name: "Srijan Gupta", image: Srijan_Gupta },
           {name: "Abhishek Singh Dangi", image: Abhishek_Singh_Dangi},
           {name: "Gaurav Raju Shende", image: Gaurav_Raju_Shende},
           {name: "Jagveer Meena", image: Jagveer_Meena},
           {name: "Mohit Kumar Gautam", image: Mohit_Kumar_Gautam},
           {name: "Ravindra Khoja", image: Ravindra_Khoja},
           {name: "Vishesh", image: Vishesh}
        ]
      },
      women: {
        leaders: [
          
        ],
        members: [
         
        ]
      }
    }
  },
  squash: {
    name: "Squash",
    description: "Squash is a fast-paced indoor racket sport where players take turns hitting a ball against a front wall.",
    team: {
      men: {
        leaders: [
          { name: "Ayush Yadav",
            post : "Captain",
            image: ayush
           },
          { name: "Piyush Dahiya",
            post: "Vice Captain",
            image: piyush
           },
        ],
        members: [
          { name: "Sarthak Singh",
            image: Sarthak_singh,
           },
          { name: "Antriksh Saran",
            image: Antriksh_Saran,
           },
        ]
      },
      women: {
        leaders: [
          { name: "Pranjal Awasthi",
            post: "Captain",
            image: pranjal
           },
           { name: "Anishka Prajapati",
            post: "Vice Captain",
            image: anishka
           },
        ],
        members: [
          { name: "Urvi",
            image: Urvi,
           },
          { name: "Ananya Singh",
            image: Ananya_Singh,
           },
        ]
      }
    }
  },
  aquatics: {
    name: "Aquatics",
    description: "Aquatics is a sports category involving water-based activities such as swimming, diving, and synchronized swimming.",
    team: {
      men: {
        leaders: [
          { name: "Saksham Paliwal",
            post: "Captain",
            image: saksham,
           },
          { name: "Suchir Kohli",
            post: "Vice Captain",
            image: suchir,
           },
        ],
        members: [
          
        ]
      },
      women: {
        leaders: [
          { name: "Isha Agrawal",
            post: "Captain",
            image: isha,
           },
          { name: "Rutuja Shelke",
            post: "Vice Captain",
            image: rutuja,
           },
        ],
        members: [
         {name: "Rishita Shukla", image: Rishita_Shukla},
        ]
      }
    }
  },
  weightlifting: {
    name: "Weightlifting",
    description: "Weightlifting is a sport that involves lifting a loaded barbell in a competition to lift the heaviest weight possible in two specific lifts: the snatch and the clean and jerk.",
    team: {
      men: {
        leaders: [
          { name: "Bhanu Pratap Singh",
            post: "Captain",
            image: bhanu,
           },
        ],
        members: [
          { name: "Abhinav Pal", image: Abhinav_Pal },
          { name: "Haneesh Bhagat", image: Haneesh_Bhagat },
          { name: "Yuvraj Dawar", image: Yuvraj_Dawar },
          {name: "Hari Om", image: Hari_Om},
        ]
      },
      women: {
        leaders: [
        ],
        members: [
        ]
      }
    }
  }  
};


  
  
  const team_members = [
    { name: "Rohit Raj Mourya", post: "Jwalamukhi", image: jwalamukhi_secretary },
    { name: "Nitesh Dohre ", post: "Dronagiri", image: dronagiri_secretary },
    { name: "Tatsam Ranjan", post: "Zanskar", image: zanskar_secretary },
    { name: "Manish Patel", post: "Satpura", image: satpura_secretary },
    { name: "Ishant Singh", post: "Saptagiri", image: saptagiri_secretary },
    {name: "Abhishek Singh", post: "Vindhyachal", image: vindhyachal_secretary },
    { name: "Aishwary Sharma", post: "Aravali", image: aravali_secretary },
    { name: "Ananya khandelwal ", post: "Kailash", image: kailash_secretary },
    { name: "krish shah", post: "Shivalik", image: shivalik_secretary },
    { name: "Vaibhav Ahuja", post: "Udaigiri", image: udaigiri_secretary },
    { name: "Harshvardhan Singh ", post: "Kumaon", image: kumaon_secretary },
    { name: "Bharavi Yadav", post: "Nalanda", image: nalanda_secretary },
    { name: "Sita Bissu ", post: "Sahyadri", image: sahyadri_secretary },
    
    { name: "Kinshuk Goswami ", post: "Girnar", image: girnar_secretary },

    // { name: "Madhav Biyani", post: "Nilgiri", image: nilgiri_secretary },

  ]

  const highlights = [
    {
      date: '19-01-2025',
      won: 'Manchester United',
      lost: 'Manchester City, Chelsea, Arsenal',
      result: 'Manchester United dominated the league.',
      images:[
        {src: "https://source.unsplash.com/1600x900/?football", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?soccer", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?premierleague", alt: "img"},
      ]
    },
    {
      date: '19-01-2025',
      won: 'Golden State Warriors',
      lost: 'Los Angeles Lakers, Miami Heat, Chicago Bulls',
      result: 'Golden State Warriors claimed a decisive victory.',
      images:[
        {src: "https://source.unsplash.com/1600x900/?football", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?soccer", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?premierleague", alt: "img"},
      ]
    },
    {
      date: '19-01-2025',
      won: 'India',
      lost: 'Australia, England, South Africa',
      result: 'India triumphed in the cricket series.',
      images:[
        {src: "https://source.unsplash.com/1600x900/?football", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?soccer", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?premierleague", alt: "img"},
      ]
    },
    {
      date: '19-01-2025',
      won: 'Lewis Hamilton',
      lost: 'Max Verstappen, Sergio Pérez, Charles Leclerc',
      result: 'Lewis Hamilton secured the F1 championship.',
      images:[
        {src: "https://source.unsplash.com/1600x900/?football", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?soccer", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?premierleague", alt: "img"},
      ]
    }
    
    ];

  // const events = [
  //   { date: '2024-12-30', title: 'Team Meeting', description: 'Discuss project updates' },
  //   { date: '2025-01-21', title: 'Conference', description: 'Attend the annual conference' },
  //   { date: '2025-01-02', title: 'Christmas Party', description: 'Holiday celebration with friends' },
  //   { date: '2025-01-05', title: 'Christmas Party', description: 'Holiday celebration with friendsHoliday' },
  // ];

  return (
    <dataContext.Provider value={{ sports, userReviews, sportsData, team_members, highlights, events }}>
      {children}
    </dataContext.Provider>
  );
};

export default Data;
