import React from "react";




function TimeWrapperComponent (screen) {
    state = {
        activeTimerId: null,
        activeSeconds: 0,
        inactiveTimerId: null,
        inactiveSeconds,
    };
    resetTimer = () => {
        this.state.inactiveSeconds = inactiveSeconds;
        this.startInactivityTimer();
        this.startActivityTimer();
    };
    
    startActivityTimer = () => {
        if (!this.state.activeTimerId) {
            this.state.activeTimerId = setInterval(() => {
                this.state.activeSeconds += 1;
            }, 1000);
        }
    };
    
    startInactivityTimer = () => {
        if (!this.state.inactiveTimerId) {
            this.state.inactiveTimerId = setInterval(() => {
                this.state.inactiveSeconds -= 1;
                if (this.state.inactiveSeconds === 0) {
                    this.stopTimer();
                }
            }, 1000);
        }
    };
    
    stopTimer = () => {
        if (this.state.inactiveTimerId) {
            clearInterval(this.state.inactiveTimerId);
            this.state.inactiveTimerId = null;
        }
        if (this.state.activeTimerId) {
            clearInterval(this.state.activeTimerId);
            this.state.activeTimerId = null;
        }
        return this.state.activeSeconds;
    };
    
    onUserActivity = isActive => {
        if (isActive && includeTouchActivity) {
            this.resetTimer();
        }
        console.log(activeSeconds);
    };
    
    componentDidMount = () => {
        AppState.addEventListener("change", this._handleAppStateChange);
    };
    
    componentWillUnmount = () => {
        AppState.removeEventListener("change", this._handleAppStateChange);
        this.stopTimer();
    };
    
    _handleAppStateChange = nextAppState => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === "active") {
            this.resetTimer();
        } else {
            this.stopTimer();
        }
        this.setState({appState: nextAppState});
    };

    return (
       
        <UserInactivity
            isActive
            timeForInactivity={1000}
            onAction={isActive => this.onUserActivity(isActive)}
        >
            <component data = {screen}></component>
        </UserInactivity>
    );
};


export default TimeWrapperComponent;