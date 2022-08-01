import React from "react"
import styles from "../styles.module.css"
import { ReactComponent as SearchIcon } from '../../images/search.svg'

class Searchbar extends React.Component {

    state = {
    request: ""
    }

    onInputChange = e => {
       
        this.setState({ request: e.currentTarget.value });
    }

    onInputSubmit = e => {
        e.preventDefault();
        if (this.state.request === "") {
            return alert("Enter request")
        }
        this.props.onRequestSubmit(this.state.request.toLocaleLowerCase());

        this.setState({request: ""})
        
    }

    render() {
        return (
            <header className={styles.searchbar}>
                <form className={styles.searchForm} onSubmit={this.onInputSubmit}>
                    <button type="submit"
                        className={styles.searchFormButton}
                        
                        >
                        <SearchIcon/>
                        <span className={styles.searchFormButtonLabel}></span>
                    </button>

                    <input
                    className={styles.searchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                        onChange={this.onInputChange}
                        value = {this.state.request}
                    
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar