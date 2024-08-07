// import ExportButton from '@/app/shared/export-button';
import EnhancedTanTable from '@/components/tan-table/enhanced';
import ImportButton from '@/app/shared/import-button';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import TableCollapsible from '@/components/tan-table/collapsible';
import Table from '@/components/tan-table/table';

const pageHeader = {
  title: 'Enhanced Table',
  breadcrumb: [
    {
      name: 'Home',
    },
    {
      name: 'Table',
    },
    {
      name: 'Enhanced Table',
    },
  ],
};

export default function TanTableEnhanced() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
          <ImportButton title={'Import File'} />
        </div>
      </PageHeader>
      <Table/>
      {/* <EnhancedTanTable />
      <TableCollapsible /> */}
    </>
  );
}
