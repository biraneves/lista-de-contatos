import styled from 'styled-components';
import vars from '../../styles/vars';

type TagProps = {
    children: string;
};

type ContactInfoProps = {
    type: 'email' | 'phone';
};

const getTagBackgroundColor: (props: TagProps) => string = props => {
    switch (props.children) {
        case 'amigos':
            return vars.tagYellow;
        case 'família':
            return vars.tagGreen;
        case 'trabalho':
            return vars.tagRed;
        default:
            return vars.tagGray;
    }
};

const getTagColor: (props: TagProps) => string = props => {
    switch (props.children) {
        case 'amigos':
            return vars.yellow;
        case 'família':
            return vars.green;
        case 'trabalho':
            return vars.red;
        default:
            return vars.gray;
    }
};

export const ContactItem = styled.li`
    display: block;
`;

export const Card = styled.div`
    padding: 12px;
    border: solid 1px #aaa;
    border-radius: 8px;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
    background-color: #fff;
`;

export const ContactName = styled.h4`
    color: ${vars.gray};
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
`;

export const CategoryTag = styled.span<TagProps>`
    display: inline-block;
    margin: 12px 0;
    padding: 4px 8px;
    background-color: ${props => getTagBackgroundColor(props)};
    color: ${props => getTagColor(props)};
    border-radius: 4px;
    font-size: 10px;
    text-transform: uppercase;
`;

export const ContactInfos = styled.div`
    padding: 8px;
    background-color: #efefef;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 14px;
`;

export const ContactInfo = styled.span<ContactInfoProps>`
    display: block;
    line-height: 32px;
    max-width: 190px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
        color: ${vars.gray};
        margin-right: 8px;
    }

    a {
        color: ${vars.gray};
        text-decoration: none;
    }
`;

export const ActionBar = styled.div`
    margin-top: 12px;
    border-top: solid 1px rgba(0, 0, 0, 0.2);
    padding-top: 12px;
`;
