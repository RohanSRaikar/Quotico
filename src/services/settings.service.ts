export class SettingsService{
    private altBackground = false ;

    

    setBackground(isAlt:boolean){
        this.altBackground = isAlt;
    }

    isAltBackground(){
        this.altBackground;
    }
}