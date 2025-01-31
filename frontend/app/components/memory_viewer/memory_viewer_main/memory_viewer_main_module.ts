import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DiagnosticsViewModule} from 'org_xprof/frontend/app/components/diagnostics_view/diagnostics_view_module';
import {MaxHeapChartModule} from 'org_xprof/frontend/app/components/memory_viewer/max_heap_chart/max_heap_chart_module';
import {MaxHeapChartDownloaderModule} from 'org_xprof/frontend/app/components/memory_viewer/max_heap_chart_downloader/max_heap_chart_downloader_module';
import {ProgramOrderChartModule} from 'org_xprof/frontend/app/components/memory_viewer/program_order_chart/program_order_chart_module';

import {MemoryViewerMain} from './memory_viewer_main';

/** A memory viewer module. */
@NgModule({
  declarations: [MemoryViewerMain],
  imports: [
    DiagnosticsViewModule,
    FormsModule,
    MatDividerModule,
    MaxHeapChartModule,
    MaxHeapChartDownloaderModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    ProgramOrderChartModule,
  ],
  exports: [MemoryViewerMain]
})
export class MemoryViewerMainModule {
}
