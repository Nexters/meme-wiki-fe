import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid red;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 487.5px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ShareButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  background-color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h2`
  font-size: 14px;
  color: #434343;
  margin-bottom: 10px;
`;

const HashtagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Hashtag = styled.span`
  padding: 8px 16px;
  background-color: #2c2c2c;
  color: #f5f5f5;
  border-radius: 4px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export {
  Container,
  ImageContainer,
  Image,
  ContentContainer,
  TagContainer,
  CategoryTitle,
  HashtagContainer,
  Hashtag,
  Description,
  ShareButton,
};
