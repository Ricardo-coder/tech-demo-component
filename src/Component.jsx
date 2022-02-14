import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.object
}

const defaultProps = {
    styles: {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
        },
        img: {
            minWidth: 200,
            minHeight: 200,
            width: '100%',
            height: '100%'
        },
        title: {
           fontSize: 24,
           color: '#666666',
           fontFamily: 'sans-serif',
           fontWeight: 'bold'
        },
        text: {
            fontSize: 16,
            color: '#000000',
            fontFamily: 'serif',
        }
    }
}

const defaultValues = {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    alt: '',
    title: 'Titulo do Card',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus, orci quis fringilla scelerisque, neque orci gravida diam, in sagittis nisi nunc eget metus.'
}

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    
    render() {
        const styles = this.props.styles || {};

        return (
            <div style={styles.container}>
                <img style={styles.img} src={this.props.img || defaultValues.img} alt={this.props.alt || defaultValues.alt} />
                <span style={styles.title}>{this.props.title || defaultProps.title}</span>
                <p style={styles.text}>{this.props.text || defaultValues.text}</p>
            </div>
        );
    }
}

CardComponent.propTypes = propTypes;
CardComponent.defaultProps = defaultProps;
CardComponent.defaultValues = defaultValues;

export default CardComponent;