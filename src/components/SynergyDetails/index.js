import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function SynergyDetails({ details, synergyIndex }) {
  return (
    <S.Wrapper>
      <S.Header>
        <SvgBrawler />
        <S.Name>{details.name}</S.Name>
      </S.Header>
      <S.Description>
        {details.description || 'No description provided at the moment.'}
      </S.Description>
      <S.SynergyList>
        {details.bonuses.map((bonus, index) => (
          <S.SynergyItem key={index} className={synergyIndex === index ? 'active' : ''}>
            ({bonus.needed}) {bonus.effect}
          </S.SynergyItem>
        ))}
      </S.SynergyList>
    </S.Wrapper>
  );
}

SynergyDetails.propTypes = {
  details: PropTypes.object.isRequired,
  synergyIndex: PropTypes.number
};

// This is just a mock and will me replaced when more icons are added
const SvgBrawler = () => (
  <svg width={20} height={20}>
    <path
      d="M14.332 19.556c-1.347-.282-2.474-.717-3.38-1.304-.906-.588-1.173-1.062-.801-1.422.062-.063.495-.083 1.3-.06a48.8 48.8 0 012.81.177c1.828.172 2.935.34 3.322.505.387.165.58.537.58 1.117 0 .83-.197 1.297-.591 1.398-.395.102-1.475-.035-3.24-.41zM2.138 13.28c-.14-.36-.29-.944-.453-1.75a31.257 31.257 0 01-.383-2.34L1 6.44 12.474 0 19 2.045l-.163 3.55c-.046.97-.116 2.075-.209 3.313a113.404 113.404 0 01-.255 2.985l-.279 2.798-1.881-.165c-.867-.078-1.428-.243-1.684-.494-.255-.25-.523-.924-.801-2.021l-.627-2.35-.047 2.515c-.03 1.206-.112 1.92-.244 2.139-.131.219-.538.29-1.219.211-.588-.063-1.006-.25-1.254-.564-.248-.313-.496-.964-.743-1.951l-.628-2.35-.046 2.468c-.031 1.206-.12 1.923-.267 2.15-.147.227-.592.341-1.336.341-.696 0-1.145-.11-1.347-.329-.201-.22-.379-.807-.534-1.763-.232-1.473-.468-2.24-.708-2.303-.24-.063-.283.619-.128 2.045.124 1.065.14 1.723.046 1.974-.092.25-.394.376-.905.376-.356 0-.674-.114-.953-.34-.278-.228-.495-.561-.65-1z"
      fill="#D8A75B"
      fillRule="nonzero"
    />
  </svg>
);
