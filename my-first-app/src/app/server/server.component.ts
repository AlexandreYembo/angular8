import { Component} from '@angular/core';

//pass object configuration, to be used as a component
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    } 
}