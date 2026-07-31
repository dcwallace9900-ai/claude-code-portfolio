import ArtifactLayout from '../apkudo/ArtifactLayout';

export default function NotificationsApiReference() {
  return (
    <ArtifactLayout
      artifactType="API Reference"
      title="Send a notification"
      backTo="/#projects"
      backLabel="Back to Projects"
    >
      <div className="flex items-baseline gap-2 mb-8 -mt-2">
        <span className="font-mono text-sm font-bold text-accent-600">POST</span>
        <span className="font-mono text-sm text-primary-800">/v1/notifications</span>
      </div>

      <p className="text-gray-700 leading-relaxed font-sans mb-10">
        The Notifications API sends transactional messages to a single
        recipient across email, SMS, or push channels. Use this endpoint to
        send one notification. Delivery is asynchronous: a successful
        response means the notification was queued, not yet delivered.
      </p>

      <Section title="Request body">
        <Table
          columns={['Name', 'Required', 'Type', 'Description']}
          rows={[
            ['channel', 'Required', 'string', 'Delivery channel. One of email, sms, or push.'],
            ['recipient', 'Required', 'object', 'The message recipient. See the Recipient object below.'],
            ['template_id', 'Required', 'string', 'ID of the template used to render the message.'],
            ['data', 'Optional', 'object', 'Key-value pairs merged into the template at render time.'],
            ['idempotency_key', 'Optional', 'string', 'A unique key that lets you safely retry the request without sending duplicates.'],
          ]}
        />

        <h3 className="font-heading font-semibold text-lg text-primary-800 mt-8 mb-3">
          Recipient object
        </h3>
        <Table
          columns={['Name', 'Required', 'Type', 'Description']}
          rows={[
            ['id', 'Optional', 'string', 'Your internal identifier for the recipient.'],
            ['email', 'Conditional', 'string', 'Required when channel is email.'],
            ['phone', 'Conditional', 'string', 'Required when channel is sms.'],
            ['device_token', 'Conditional', 'string', 'Required when channel is push.'],
          ]}
        />
      </Section>

      <Section title="Request example">
        <CodeBlock
          code={`{
  "channel": "email",
  "recipient": { "id": "usr_8123", "email": "jordan@example.com" },
  "template_id": "tmpl_order_shipped",
  "data": { "order_number": "10428", "carrier": "UPS" },
  "idempotency_key": "b7f2c9a1-order-10428"
}`}
        />
      </Section>

      <Section title="Response">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-mono text-sm font-bold text-gold-700">202</span>
          <span className="font-heading font-semibold text-lg text-primary-800">
            Accepted
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed font-sans mb-4">
          Returned when the notification is accepted and queued for delivery.
        </p>
        <Table
          columns={['Name', 'Type', 'Description']}
          rows={[
            ['id', 'string', 'Unique identifier for the queued notification.'],
            ['status', 'string', 'Always "queued" on a 202 response.'],
            ['channel', 'string', 'The channel the notification was queued on.'],
          ]}
        />

        <div className="mt-6">
          <CodeBlock
            code={`{
  "id": "ntf_5f3a91",
  "status": "queued",
  "channel": "email"
}`}
          />
        </div>
      </Section>

      <Section title="Errors">
        <Table
          columns={['Status', 'Meaning', 'When it occurs']}
          rows={[
            ['400', 'Bad Request', 'A required field is missing or malformed.'],
            ['401', 'Unauthorized', 'The API key is missing or invalid.'],
            ['422', 'Unprocessable Entity', 'channel is "email" but recipient.email was not provided.'],
            ['429', 'Too Many Requests', 'Rate limit exceeded. Retry after the interval in the Retry-After header.'],
          ]}
        />
      </Section>
    </ArtifactLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading font-bold text-xl text-primary-900 mb-2">{title}</h2>
      <div className="w-12 h-0.5 bg-gold-500 mb-4"></div>
      <div className="text-gray-700 leading-relaxed font-sans">{children}</div>
    </div>
  );
}

function Table({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm font-sans border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b-2 border-gold-500">
            {columns.map((col) => (
              <th
                key={col}
                className="text-left text-xs font-semibold uppercase tracking-wide text-primary-900 px-4 py-3"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row[0]}
              className={i !== rows.length - 1 ? 'border-b border-gray-200' : ''}
            >
              {row.map((cell, j) => (
                <td key={j} className="align-top px-4 py-3 text-gray-700">
                  {j === 0 ? (
                    <code className="font-mono text-xs text-accent-700 bg-accent-50 px-1.5 py-0.5 rounded">
                      {cell}
                    </code>
                  ) : j === 1 && (cell === 'Required' || cell === 'Optional' || cell === 'Conditional') ? (
                    <span
                      className={
                        cell === 'Required'
                          ? 'text-accent-600 font-semibold'
                          : cell === 'Conditional'
                          ? 'text-gold-700 font-semibold'
                          : 'text-gray-500'
                      }
                    >
                      {cell}
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-primary-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
      <code className="font-mono text-sm leading-relaxed">{code}</code>
    </pre>
  );
}
