import React from 'react';
import {Button, Modal, View, StyleSheet, Text,Image, ScrollView} from 'react-native';

const SampleModal = props => {
  return (
    
      <Modal visible = {props.visible} animationType = 'fade'>
        <ScrollView>
          <View>
        <Image style = {styles.imageStyle} source = {{uri: 'https://i.pinimg.com/originals/c0/db/dd/c0dbdd9dd95022b6a2c2a08fc7708c16.gif'}}/>
      </View>
          <View style = {styles.container}>

            <Text style = {styles.header}>The Hunger Games</Text>
           
            <Text style = {styles.textStyle}>The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation. The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death.{'\n\n'}
The book received critical acclaim from major reviewers and authors. It was praised for its plot and character development. In writing The Hunger Games, Collins drew upon Greek mythology, Roman gladiatorial games, and contemporary reality television for thematic content. The novel won many awards, including the California Young Reader Medal, and was named one of Publishers Weekly's "Best Books of the Year" in 2008.{'\n\n'}
The Hunger Games was first published in hardcover on September 14, 2008, by Scholastic, featuring a cover designed by Tim O'Brien. It has since been released in paperback and also as an audiobook and ebook. After an initial print of 200,000, the book had sold 800,000 copies by February 2010. Since its release, The Hunger Games has been translated into 26 languages, and publishing rights have been sold in 38 territories. The novel is the first in The Hunger Games trilogy, followed by Catching Fire (2009) and Mockingjay (2010). A film adaptation, directed by Gary Ross and co-written and co-produced by Collins herself, was released in 2012. </Text>

          <Text style = {styles.header}>The Hunger Games (2012)</Text>
          <Text style = {styles.textStyle}>Every year, in the ruins of what was once North America, the Capitol of the nation of Panem forces each of the 12 districts to send a boy and girl tribute between the ages of 12 and 18 to compete in the Hunger Games: a nationally televised event in which the 'tributes' fight each other to the death until one survivor remains. When Primrose Everdeen is "reaped," her older sister Katniss volunteers in her place as tribute to enter the games and is forced to rely upon her sharp instincts and knowledge when she's pitted against highly-trained and fierce tributes from all of the other districts and has to think quickly on her feet to survive.
</Text>

          <Text style = {styles.header}>The Hunger Games: Catching Fire (2013)</Text>
          <Text style = {styles.textStyle}>Along with fellow District 12 victor Peeta Mellark, Katniss Everdeen returns home safely after winning the 74th Annual Hunger Games. Winning means that they must leave their loved ones behind and embark on a Victory Tour throughout the districts for a couple of days. Along the way Katniss senses a rebellion simmering upon the capitol - one that she and Peeta may have sparked - but the Capitol is still in control as President Snow prepares the 75th Hunger Games - the Third Quarter Quell - that could change Panem forever. Past victors will be reaped in the 75th Hunger Games the Third Quarter Quell.</Text>

          <Text style = {styles.header}>The Hunger Games: Mockingjay – Part 1 (2014)</Text>
          <Text style = {styles.textStyle}>Following her rescue from the devastating Quarter Quell, Katniss Everdeen awakes in the complex beneath the supposedly destroyed District 13. Her home, District 12, has been reduced to rubble by the Capitol. Peeta Mellark was kidnapped by the Capitol and is now brainwashed and being held captive by President Snow. Snow wants Peeta to forget everything he had loved about Katniss. At the same time, Katniss also learns about a secret rebellion spreading throughout all of Panem - a rebellion that will place her at the center of attention and she will have to turn the tables on President Snow.</Text>

          <Text style = {styles.header}>The Hunger Games: Mockingjay – Part 2 (2015)</Text>
          <Text style = {styles.textStyle}>Realizing the stakes are no longer just for survival, Katniss Everdeen teams up with her closest friends, including Peeta Mellark, Gale Hawthorne and Finnick Odair for the ultimate mission to gain peace. Together, they leave District 13 to liberate the citizens of war that has torn Panem apart more than it has ever been. President Snow becomes obsessed with destroying Katniss Everdeen and everyone and everything she loves. What lies ahead are mortal traps, dangerous enemies and moral choices that will ultimately determine the future of millions of people.</Text>
          
          <Text style = {styles.header}>The Ballad of Songbirds and Snakes (TBA)(2014)</Text>
          <Text style = {styles.textStyle}>In August 2017, Lionsgate CEO Jon Feltheimer expressed interest in spin-offs of The Hunger Games, with intentions to create a writers room to explore the concept.[9] In June 2019, Chairman of the Lionsgate Motion Picture Group Joe Drake, announced that the company is communicating and working closely with Suzanne Collins in options to adapt the prequel to the original trilogy. The Ballad of Songbirds and Snakes, which was released on May 19, 2020. {'\n\n'}
By April 2020, a film adaptation was announced to be officially in development. Francis Lawrence will return as director, with a script written by Michael Arndt, from a story adaptation by Suzanne Collins. Nina Jacobson will return as producer, alongside Brad Simpson. The project will be developed by Color Force, and distributed by Lionsgate.</Text>
          
            <Button 
              title = 'CLOSE' 
              color = 'black'
              onPress = {props.onClose} 
              />
          </View>
        </ScrollView>

      </Modal>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c4c4cc',
    borderWidth: 4,
    borderColor:'red',
    padding: 2  
  },

  textStyle: {
    fontSize: 12,
    textAlign: 'justify',
    margin: 10
  },

  header: {
    fontSize:15,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10
  },

  imageStyle: {
    width: 200,
    height: 200
  },
  imageStyle: {
    width: 360,
    height: 250
  }
});


export default SampleModal;
