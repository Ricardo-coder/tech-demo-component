import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    styles: PropTypes.object
}

const defaultProps = {
    styles: {
        container: {
            display: 'grid',
            zIndex: 10,
            maxWidth: '250px',
            border: '1px solid #666666',
            padding: 15,
            margin: 20
        },
        img: {
            width: '100%',
            height: '100%'
        },
        title: {
           fontSize: 24,
           color: '#666666',
           fontFamily: 'sans-serif',
           fontWeight: 'bold',
           textAlign: 'center',
           padding: 10
        },
        text: {
            fontSize: 16,
            color: '#000000',
            fontFamily: 'serif',
        }
    },
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    alt: '',
    title: 'Titulo do Card',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus, orci quis fringilla scelerisque, neque orci gravida diam, in sagittis nisi nunc eget metus.'
}

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const styles = {...this.props.styles, ...defaultProps.styles} || {};

        return (
            <div style={styles.container}>
                <img style={styles.img} src={this.props.img || defaultProps.img} alt={this.props.alt || defaultProps.alt} />
                <span style={styles.title}>{this.props.title || defaultProps.title}</span>
                <p style={styles.text}>{this.props.text || defaultProps.text}</p>
            </div>
        );
    }
}

CardComponent.propTypes = propTypes;
CardComponent.defaultProps = defaultProps;

export default CardComponent;