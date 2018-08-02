
  var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (

        <div className={'contactItem'}>
    <img className={'contactImage'} src={'https://www.shareicon.net/download/2015/08/23/89482_contact.svg'}/>
    <p className={'contactLabel'}>
        Imię: {this.props.contact.firstName}
    </p>
    <p className={'contactLabel'}>
        Nazwisko: {this.props.contact.lastName}
    </p>
    <a href={'mailto:' + this.props.item.email}>
        {this.props.item.email}
    </a>
</div>

        /*React.createElement('div', {className: 'contactItem'},
          React.createElement('img', {
            className: 'contactImage',
            src: 'https://www.shareicon.net/download/2015/08/23/89482_contact.svg'
          }),
          React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
            this.props.item.email
          )
        )*/
      )
    },
  });