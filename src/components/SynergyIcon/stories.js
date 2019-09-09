import React from 'react';
import SynergyIcon from '.';
import { storiesOf } from '@storybook/react';

const decorator = storyFn => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 40px)',
      gridGap: '2.4rem',
      alignItems: 'center'
    }}
  >
    {storyFn()}
  </div>
);

storiesOf('SynergyIcon', module)
  .addDecorator(decorator)
  .add('No Synergy', () => <SynergyIcon />)
  .add('Assassin', () => (
    <>
      <SynergyIcon classOrOrigin="assassin" type="hover" />
      <SynergyIcon classOrOrigin="assassin" type="default" />
      <SynergyIcon classOrOrigin="assassin" type="partial" />
      <SynergyIcon classOrOrigin="assassin" type="bronze" />
      <SynergyIcon classOrOrigin="assassin" type="silver" />
      <SynergyIcon classOrOrigin="assassin" type="gold" />
    </>
  ))
  .add('Blademaster', () => (
    <>
      <SynergyIcon classOrOrigin="blademaster" type="hover" />
      <SynergyIcon classOrOrigin="blademaster" type="default" />
      <SynergyIcon classOrOrigin="blademaster" type="partial" />
      <SynergyIcon classOrOrigin="blademaster" type="bronze" />
      <SynergyIcon classOrOrigin="blademaster" type="silver" />
      <SynergyIcon classOrOrigin="blademaster" type="gold" />
    </>
  ))
  .add('Brawler', () => (
    <>
      <SynergyIcon classOrOrigin="brawler" type="hover" />
      <SynergyIcon classOrOrigin="brawler" type="default" />
      <SynergyIcon classOrOrigin="brawler" type="partial" />
      <SynergyIcon classOrOrigin="brawler" type="bronze" />
      <SynergyIcon classOrOrigin="brawler" type="silver" />
      <SynergyIcon classOrOrigin="brawler" type="gold" />
    </>
  ))
  .add('Demon', () => (
    <>
      <SynergyIcon classOrOrigin="demon" type="hover" />
      <SynergyIcon classOrOrigin="demon" type="default" />
      <SynergyIcon classOrOrigin="demon" type="partial" />
      <SynergyIcon classOrOrigin="demon" type="bronze" />
      <SynergyIcon classOrOrigin="demon" type="silver" />
      <SynergyIcon classOrOrigin="demon" type="gold" />
    </>
  ))
  .add('Dragon', () => (
    <>
      <SynergyIcon classOrOrigin="dragon" type="hover" />
      <SynergyIcon classOrOrigin="dragon" type="default" />
      <SynergyIcon classOrOrigin="dragon" type="partial" />
      <SynergyIcon classOrOrigin="dragon" type="bronze" />
      <SynergyIcon classOrOrigin="dragon" type="silver" />
      <SynergyIcon classOrOrigin="dragon" type="gold" />
    </>
  ))
  .add('Elementalist', () => (
    <>
      <SynergyIcon classOrOrigin="elementalist" type="hover" />
      <SynergyIcon classOrOrigin="elementalist" type="default" />
      <SynergyIcon classOrOrigin="elementalist" type="partial" />
      <SynergyIcon classOrOrigin="elementalist" type="bronze" />
      <SynergyIcon classOrOrigin="elementalist" type="silver" />
      <SynergyIcon classOrOrigin="elementalist" type="gold" />
    </>
  ))
  .add('Exile', () => (
    <>
      <SynergyIcon classOrOrigin="exile" type="hover" />
      <SynergyIcon classOrOrigin="exile" type="default" />
      <SynergyIcon classOrOrigin="exile" type="partial" />
      <SynergyIcon classOrOrigin="exile" type="bronze" />
      <SynergyIcon classOrOrigin="exile" type="silver" />
      <SynergyIcon classOrOrigin="exile" type="gold" />
    </>
  ))
  .add('Glacial', () => (
    <>
      <SynergyIcon classOrOrigin="glacial" type="hover" />
      <SynergyIcon classOrOrigin="glacial" type="default" />
      <SynergyIcon classOrOrigin="glacial" type="partial" />
      <SynergyIcon classOrOrigin="glacial" type="bronze" />
      <SynergyIcon classOrOrigin="glacial" type="silver" />
      <SynergyIcon classOrOrigin="glacial" type="gold" />
    </>
  ))
  .add('Guardian', () => (
    <>
      <SynergyIcon classOrOrigin="guardian" type="hover" />
      <SynergyIcon classOrOrigin="guardian" type="default" />
      <SynergyIcon classOrOrigin="guardian" type="partial" />
      <SynergyIcon classOrOrigin="guardian" type="bronze" />
      <SynergyIcon classOrOrigin="guardian" type="silver" />
      <SynergyIcon classOrOrigin="guardian" type="gold" />
    </>
  ))
  .add('Gunslinger', () => (
    <>
      <SynergyIcon classOrOrigin="gunslinger" type="hover" />
      <SynergyIcon classOrOrigin="gunslinger" type="default" />
      <SynergyIcon classOrOrigin="gunslinger" type="partial" />
      <SynergyIcon classOrOrigin="gunslinger" type="bronze" />
      <SynergyIcon classOrOrigin="gunslinger" type="silver" />
      <SynergyIcon classOrOrigin="gunslinger" type="gold" />
    </>
  ))
  .add('Hextech', () => (
    <>
      <SynergyIcon classOrOrigin="hextech" type="hover" />
      <SynergyIcon classOrOrigin="hextech" type="default" />
      <SynergyIcon classOrOrigin="hextech" type="partial" />
      <SynergyIcon classOrOrigin="hextech" type="bronze" />
      <SynergyIcon classOrOrigin="hextech" type="silver" />
      <SynergyIcon classOrOrigin="hextech" type="gold" />
    </>
  ))
  .add('Imperial', () => (
    <>
      <SynergyIcon classOrOrigin="imperial" type="hover" />
      <SynergyIcon classOrOrigin="imperial" type="default" />
      <SynergyIcon classOrOrigin="imperial" type="partial" />
      <SynergyIcon classOrOrigin="imperial" type="bronze" />
      <SynergyIcon classOrOrigin="imperial" type="silver" />
      <SynergyIcon classOrOrigin="imperial" type="gold" />
    </>
  ))
  .add('Knight', () => (
    <>
      <SynergyIcon classOrOrigin="knight" type="hover" />
      <SynergyIcon classOrOrigin="knight" type="default" />
      <SynergyIcon classOrOrigin="knight" type="partial" />
      <SynergyIcon classOrOrigin="knight" type="bronze" />
      <SynergyIcon classOrOrigin="knight" type="silver" />
      <SynergyIcon classOrOrigin="knight" type="gold" />
    </>
  ))
  .add('Ninja', () => (
    <>
      <SynergyIcon classOrOrigin="ninja" type="hover" />
      <SynergyIcon classOrOrigin="ninja" type="default" />
      <SynergyIcon classOrOrigin="ninja" type="partial" />
      <SynergyIcon classOrOrigin="ninja" type="bronze" />
      <SynergyIcon classOrOrigin="ninja" type="silver" />
      <SynergyIcon classOrOrigin="ninja" type="gold" />
    </>
  ))
  .add('Noble', () => (
    <>
      <SynergyIcon classOrOrigin="noble" type="hover" />
      <SynergyIcon classOrOrigin="noble" type="default" />
      <SynergyIcon classOrOrigin="noble" type="partial" />
      <SynergyIcon classOrOrigin="noble" type="bronze" />
      <SynergyIcon classOrOrigin="noble" type="silver" />
      <SynergyIcon classOrOrigin="noble" type="gold" />
    </>
  ))
  .add('Phantom', () => (
    <>
      <SynergyIcon classOrOrigin="phantom" type="hover" />
      <SynergyIcon classOrOrigin="phantom" type="default" />
      <SynergyIcon classOrOrigin="phantom" type="partial" />
      <SynergyIcon classOrOrigin="phantom" type="bronze" />
      <SynergyIcon classOrOrigin="phantom" type="silver" />
      <SynergyIcon classOrOrigin="phantom" type="gold" />
    </>
  ))
  .add('Pirate', () => (
    <>
      <SynergyIcon classOrOrigin="pirate" type="hover" />
      <SynergyIcon classOrOrigin="pirate" type="default" />
      <SynergyIcon classOrOrigin="pirate" type="partial" />
      <SynergyIcon classOrOrigin="pirate" type="bronze" />
      <SynergyIcon classOrOrigin="pirate" type="silver" />
      <SynergyIcon classOrOrigin="pirate" type="gold" />
    </>
  ))
  .add('Ranger', () => (
    <>
      <SynergyIcon classOrOrigin="ranger" type="hover" />
      <SynergyIcon classOrOrigin="ranger" type="default" />
      <SynergyIcon classOrOrigin="ranger" type="partial" />
      <SynergyIcon classOrOrigin="ranger" type="bronze" />
      <SynergyIcon classOrOrigin="ranger" type="silver" />
      <SynergyIcon classOrOrigin="ranger" type="gold" />
    </>
  ))
  .add('Robot', () => (
    <>
      <SynergyIcon classOrOrigin="robot" type="hover" />
      <SynergyIcon classOrOrigin="robot" type="default" />
      <SynergyIcon classOrOrigin="robot" type="partial" />
      <SynergyIcon classOrOrigin="robot" type="bronze" />
      <SynergyIcon classOrOrigin="robot" type="silver" />
      <SynergyIcon classOrOrigin="robot" type="gold" />
    </>
  ))
  .add('Shapeshifter', () => (
    <>
      <SynergyIcon classOrOrigin="shapeshifter" type="hover" />
      <SynergyIcon classOrOrigin="shapeshifter" type="default" />
      <SynergyIcon classOrOrigin="shapeshifter" type="partial" />
      <SynergyIcon classOrOrigin="shapeshifter" type="bronze" />
      <SynergyIcon classOrOrigin="shapeshifter" type="silver" />
      <SynergyIcon classOrOrigin="shapeshifter" type="gold" />
    </>
  ))
  .add('Sorcerer', () => (
    <>
      <SynergyIcon classOrOrigin="sorcerer" type="hover" />
      <SynergyIcon classOrOrigin="sorcerer" type="default" />
      <SynergyIcon classOrOrigin="sorcerer" type="partial" />
      <SynergyIcon classOrOrigin="sorcerer" type="bronze" />
      <SynergyIcon classOrOrigin="sorcerer" type="silver" />
      <SynergyIcon classOrOrigin="sorcerer" type="gold" />
    </>
  ))
  .add('Void', () => (
    <>
      <SynergyIcon classOrOrigin="void" type="hover" />
      <SynergyIcon classOrOrigin="void" type="default" />
      <SynergyIcon classOrOrigin="void" type="partial" />
      <SynergyIcon classOrOrigin="void" type="bronze" />
      <SynergyIcon classOrOrigin="void" type="silver" />
      <SynergyIcon classOrOrigin="void" type="gold" />
    </>
  ))
  .add('Wild', () => (
    <>
      <SynergyIcon classOrOrigin="wild" type="hover" />
      <SynergyIcon classOrOrigin="wild" type="default" />
      <SynergyIcon classOrOrigin="wild" type="partial" />
      <SynergyIcon classOrOrigin="wild" type="bronze" />
      <SynergyIcon classOrOrigin="wild" type="silver" />
      <SynergyIcon classOrOrigin="wild" type="gold" />
    </>
  ))
  .add('Yordle', () => (
    <>
      <SynergyIcon classOrOrigin="yordle" type="hover" />
      <SynergyIcon classOrOrigin="yordle" type="default" />
      <SynergyIcon classOrOrigin="yordle" type="partial" />
      <SynergyIcon classOrOrigin="yordle" type="bronze" />
      <SynergyIcon classOrOrigin="yordle" type="silver" />
      <SynergyIcon classOrOrigin="yordle" type="gold" />
    </>
  ));
