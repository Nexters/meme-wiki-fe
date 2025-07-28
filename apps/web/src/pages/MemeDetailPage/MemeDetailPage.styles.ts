import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
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
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  border: none;
  padding: 12px 24px;
  border-radius: 34px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ShareButtonText = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  color: #f5f5f5;
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

const YearBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  background-color: #f0f0f0;
  border-radius: 154px;
  margin-bottom: 8px;
`;

const YearText = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  line-height: 18.82px;
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
  color: #000000;
  letter-spacing: -0.392px;
  line-height: 38.024px;
  margin-bottom: 4px;
`;

const HashTags = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  letter-spacing: 0.353px;
  line-height: 28px;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  color: #171719;
  letter-spacing: 0.203px;
  line-height: 20.006px;
  margin-bottom: 4px;
`;

const SectionText = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #171719;
  letter-spacing: 0.091px;
  line-height: 26px;
  margin-bottom: 24px;
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
  ShareButtonText,
  YearBadge,
  YearText,
  Title,
  HashTags,
  SectionTitle,
  SectionText,
};
