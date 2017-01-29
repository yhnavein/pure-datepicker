export class PureDatepickerController {

  /* @ngInject */
  constructor(  ) { }

  $onInit() {

  }
}

export class PureDatepicker implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;
  public controllerAs: string;

  /** @ngInject */
  constructor() {
    this.bindings = {

    };
    this.controller = PureDatepickerController;
    this.controllerAs = 'vm';
    this.template = `
<div ng-switch="datepickerMode">
  <div uib-daypicker ng-switch-when="day" tabindex="0" class="uib-daypicker" template-url="app/core/templates/datepicker/day.html"></div>
  <div uib-monthpicker ng-switch-when="month" tabindex="0" class="uib-monthpicker" template-url="app/core/templates/datepicker/month.html"></div>
  <div uib-yearpicker ng-switch-when="year" tabindex="0" class="uib-yearpicker" template-url="app/core/templates/datepicker/year.html"></div>
</div>
`;
  }
}
