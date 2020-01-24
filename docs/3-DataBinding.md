# DataBinding

### What is it?
Used to display the information dynamically, what is not harded coded into the template.

You could understand Databinding as communication between your type script code (Business Logic), and the template (HTML).

### How can  you do?
#### Output data by using
##### - String Interpolation:
```{{ data }}```

##### - Property binding:
``` [property]="data"```

#### React to (User) Events
##### - Event binding:
```(event)="expression```

#### Combination of Both
##### - Two-Way-Binding:
```[(ngModel)="data"]```

### String Interpolation
```ts
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
}
```
```html
<p>Server with ID {{ serverid }} is {{ serverStatus }}</p>
```
Any expresson can result in string in the end.
```html
<p>{{ 'Server' }} with ID {{ serverid }} is {{ serverStatus }}</p>
```

### Property Binding
 