import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 487.5px;
  background-color: #d9d9d9;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CategoryTitle = styled.h2`
  font-size: 14px;
  color: #434343;
  margin-bottom: 10px;
`;

export const HashtagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Hashtag = styled.span`
  padding: 8px 16px;
  background-color: #2c2c2c;
  color: #f5f5f5;
  border-radius: 4px;
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: #000000;
`;

export const ShareButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  background-color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
